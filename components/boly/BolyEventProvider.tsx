"use client";

import { createContext, useCallback, useEffect, useMemo, useRef, useState, type PropsWithChildren } from "react";
import { resolveBolyEvent, type BolyEventType } from "@/content/boly-events";
import { dismissManagedEvent, enqueueManagedEvent, type ManagedBolyEvent, type TriggerBolyEventOptions } from "@/lib/boly-event-manager";

export type BolyEventProviderProps = PropsWithChildren<{
  defaultPosition?: "left" | "right"; defaultSize?: "sm" | "md" | "lg"; defaultDurationMs?: number;
  maxQueueLength?: number; enablePersistence?: boolean; debug?: boolean;
}>;
export type BolyEventContextValue = {
  triggerBolyEvent: (event: BolyEventType, options?: TriggerBolyEventOptions) => void;
  dismissBolyEvent: () => void; clearBolyEventQueue: () => void; resetBolyEventSession: () => void;
  activeBolyEvent: ManagedBolyEvent | null; queuedBolyEvents: readonly ManagedBolyEvent[]; isBolyVisible: boolean;
};
export const BolyEventContext = createContext<BolyEventContextValue | null>(null);
const sessionKey = "boly-event-manager:shown";

export function BolyEventProvider({ children, defaultPosition = "right", defaultSize = "md", defaultDurationMs, maxQueueLength = 8, enablePersistence = true, debug = false }: BolyEventProviderProps) {
  const [state, setState] = useState<{ active: ManagedBolyEvent | null; queue: ManagedBolyEvent[] }>({ active: null, queue: [] });
  const lastRun = useRef(new Map<BolyEventType, number>());
  const shown = useRef(new Set<string>());
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mounted = useRef(false);
  useEffect(() => { mounted.current = true; if (enablePersistence) { try { shown.current = new Set(JSON.parse(sessionStorage.getItem(sessionKey) ?? "[]")); } catch { shown.current = new Set(); } } return () => { mounted.current = false; if (timer.current) clearTimeout(timer.current); }; }, [enablePersistence]);
  const persist = useCallback(() => { if (!enablePersistence) return; try { sessionStorage.setItem(sessionKey, JSON.stringify([...shown.current])); } catch { /* session storage is optional */ } }, [enablePersistence]);
  const dismissBolyEvent = useCallback(() => setState((current) => dismissManagedEvent(current)), []);
  useEffect(() => {
    if (timer.current) { clearTimeout(timer.current); timer.current = null; }
    const event = state.active;
    if (!event) return;
    // Critical alerts intentionally require a user action unless durationMs is explicitly supplied.
    const duration = event.durationMs ?? (event.priority === "critical" ? undefined : defaultDurationMs);
    if (duration && duration > 0) timer.current = setTimeout(dismissBolyEvent, duration);
    return () => { if (timer.current) clearTimeout(timer.current); timer.current = null; };
  }, [state.active, defaultDurationMs, dismissBolyEvent]);
  const triggerBolyEvent = useCallback((event: BolyEventType, options: TriggerBolyEventOptions = {}) => {
    const resolved = resolveBolyEvent(event, options); if (!resolved) return;
    const now = Date.now();
    if (resolved.oncePerSession && shown.current.has(event)) return;
    const last = lastRun.current.get(event); if (last && resolved.cooldownSeconds && now - last < resolved.cooldownSeconds * 1000) return;
    const candidate: ManagedBolyEvent = { ...resolved, ...options, position: options.position ?? defaultPosition, size: options.size ?? defaultSize, durationMs: options.durationMs, dismissible: options.dismissible ?? true, id: `${event}-${now}` };
    setState((current) => {
      const next = enqueueManagedEvent(current, candidate, Math.max(0, maxQueueLength));
      if (next === current) return current;
      lastRun.current.set(event, now);
      if (resolved.oncePerSession) { shown.current.add(event); persist(); }
      if (debug) console.debug("[BolyEventManager] queued", event, next);
      return next;
    });
  }, [defaultPosition, defaultSize, maxQueueLength, persist, debug]);
  const clearBolyEventQueue = useCallback(() => setState((current) => ({ ...current, queue: [] })), []);
  const resetBolyEventSession = useCallback(() => { shown.current.clear(); lastRun.current.clear(); if (enablePersistence) try { sessionStorage.removeItem(sessionKey); } catch { /* optional storage */ } }, [enablePersistence]);
  const value = useMemo(() => ({ triggerBolyEvent, dismissBolyEvent, clearBolyEventQueue, resetBolyEventSession, activeBolyEvent: state.active, queuedBolyEvents: state.queue, isBolyVisible: Boolean(state.active) }), [triggerBolyEvent, dismissBolyEvent, clearBolyEventQueue, resetBolyEventSession, state]);
  return <BolyEventContext.Provider value={value}>{children}</BolyEventContext.Provider>;
}
