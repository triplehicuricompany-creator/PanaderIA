import { NextResponse } from "next/server";
import { paymentProviders } from "@/lib/payments/providers";

export async function POST() {
  return NextResponse.json({ provider: paymentProviders.paypal.displayName, enabled: false, message: "PayPal webhook preparado para Fase de pagos." }, { status: 202 });
}
