export type PaymentProvider = "stripe" | "paypal";

export const paymentProviders: Record<PaymentProvider, { displayName: string; webhookPath: string; enabled: boolean }> = {
  stripe: { displayName: "Stripe", webhookPath: "/api/payments/stripe/webhook", enabled: false },
  paypal: { displayName: "PayPal", webhookPath: "/api/payments/paypal/webhook", enabled: false }
};
