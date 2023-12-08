"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { cache } from "react";

export const createServerClient = cache(() => {
  const cookieStore = cookies();
  return createServerComponentClient({
    cookies: () => cookieStore,
  });
});

export async function getPageData() {
  return (
    await createServerClient().from("static_data").select("*").limit(1).single()
  ).data.data;
}
