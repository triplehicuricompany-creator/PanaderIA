import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ enabled: false, message: "Resolución de QR preparada para conectar base de datos, permisos y recursos privados." });
}
