import { NextResponse } from "next/server";
import { bolyConfig } from "@/lib/ai/boly";
import { bolyKnowledgeAreas, faqs } from "@/content/site";

export async function GET() {
  return NextResponse.json({ config: bolyConfig, knowledgeAreas: bolyKnowledgeAreas, faqs, enabled: false });
}
