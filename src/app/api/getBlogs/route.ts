import { createRouteClient } from "@/lib/db";

export async function GET() {
  return Response.json(
    (await createRouteClient().from("data").select("*")).data
  );
}
