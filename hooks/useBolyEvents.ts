"use client";

import { useContext } from "react";
import { BolyEventContext, type BolyEventContextValue } from "@/components/boly/BolyEventProvider";

export type { TriggerBolyEventOptions } from "@/lib/boly-event-manager";

/** Access the event manager. It must be used beneath BolyEventProvider. */
export function useBolyEvents(): BolyEventContextValue {
  const context = useContext(BolyEventContext);
  if (!context) throw new Error("useBolyEvents must be used within a BolyEventProvider.");
  return context;
}
