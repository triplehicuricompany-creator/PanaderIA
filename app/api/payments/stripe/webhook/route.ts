import { NextResponse } from "next/server";
import { paymentProviders } from "@/lib/payments/providers";

export async function POST() {
  return NextResponse.json({ provider: paymentProviders.stripe.displayName, enabled: false, message: "Stripe webhook preparado para Fase de pagos." }, { status: 202 });
}
