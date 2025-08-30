import { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const body = await req.json();
    const { formKey, data, signature } = body ?? {};
    if (!formKey || !data || !signature) {
      return new Response("Missing fields", { status: 400 });
    }

    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    const outDir = path.join(process.cwd(), "consent-submissions");
    await fs.mkdir(outDir, { recursive: true });
    const rec = { id, formKey, data, signature, createdAt: new Date().toISOString() };
    await fs.writeFile(path.join(outDir, `${id}.json`), JSON.stringify(rec, null, 2), "utf-8");

    return Response.json({ ok: true, id });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Server error";
    return new Response(message, { status: 500 });
  }
}
