import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const WebhookSchema = z.object({
  generatedVideoSharedIds: z.array(z.string()),
});

type RequestPayload = z.infer<typeof WebhookSchema>;

export async function POST(req: NextRequest) {
  const parsed = WebhookSchema.safeParse(await req.json());

  if (!parsed.success) {
    return Response.json(
      {
        error: "invalid body",
      },
      {
        status: 400,
      }
    );
  }

  const data: RequestPayload = parsed.data;

  return Response.json({
    message: "hi",
    data,
  });
}
