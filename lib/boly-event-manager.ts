import type { BolyDialogueTone } from "@/content/boly-dialogue-tone";
import type { BolyEventPriority, ResolvedBolyEvent } from "@/content/boly-events";

export type BolyEventPosition = "left" | "right";
export type BolyEventSize = "sm" | "md" | "lg";
export type TriggerBolyEventOptions = {
  message?: string; title?: string; imageId?: string; tone?: BolyDialogueTone;
  position?: BolyEventPosition; size?: BolyEventSize; durationMs?: number; dismissible?: boolean;
};
export type ManagedBolyEvent = ResolvedBolyEvent & TriggerBolyEventOptions & { id: string };
export type ManagerState = { active: ManagedBolyEvent | null; queue: ManagedBolyEvent[] };

export const priorityValue: Record<BolyEventPriority, number> = { low: 0, normal: 1, high: 2, critical: 3 };

/** Stable fingerprint: equal event + presentation overrides is considered a duplicate. */
export function eventFingerprint(event: Pick<ManagedBolyEvent, "event" | "message" | "title" | "imageId" | "tone" | "position" | "size" | "durationMs" | "dismissible">) {
  return JSON.stringify([event.event, event.message, event.title, event.imageId, event.tone, event.position, event.size, event.durationMs, event.dismissible]);
}
export function isDuplicate(candidate: ManagedBolyEvent, events: readonly ManagedBolyEvent[]) {
  const key = eventFingerprint(candidate);
  return events.some((event) => eventFingerprint(event) === key);
}

/** Inserts by priority, preserving FIFO order among events of the same priority. */
export function insertByPriority(queue: readonly ManagedBolyEvent[], candidate: ManagedBolyEvent) {
  const candidatePriority = priorityValue[candidate.priority];
  const index = queue.findIndex((item) => priorityValue[item.priority] < candidatePriority);
  return index === -1 ? [...queue, candidate] : [...queue.slice(0, index), candidate, ...queue.slice(index)];
}

/** On capacity, remove the oldest low event first; critical events are never removed. */
export function limitQueue(queue: readonly ManagedBolyEvent[], maxQueueLength: number) {
  const result = [...queue];
  while (result.length > maxQueueLength) {
    const lowIndex = result.findIndex((event) => event.priority === "low");
    if (lowIndex >= 0) result.splice(lowIndex, 1);
    else {
      const removable = result.map((event, index) => ({ event, index })).reverse().find(({ event }) => event.priority !== "critical")?.index;
      if (removable === undefined) break;
      result.splice(removable, 1);
    }
  }
  return result;
}

/** Applies replacement rules. Preempted events return to the priority-sorted queue. */
export function enqueueManagedEvent(state: ManagerState, candidate: ManagedBolyEvent, maxQueueLength: number): ManagerState {
  if (isDuplicate(candidate, [state.active, ...state.queue].filter(Boolean) as ManagedBolyEvent[])) return state;
  if (!state.active) return { active: candidate, queue: state.queue };
  const incoming = priorityValue[candidate.priority];
  const visible = priorityValue[state.active.priority];
  if (incoming > visible) return { active: candidate, queue: limitQueue(insertByPriority(state.queue, state.active), maxQueueLength) };
  return { active: state.active, queue: limitQueue(insertByPriority(state.queue, candidate), maxQueueLength) };
}

export function dismissManagedEvent(state: ManagerState): ManagerState {
  const [next, ...rest] = state.queue;
  return { active: next ?? null, queue: rest };
}
