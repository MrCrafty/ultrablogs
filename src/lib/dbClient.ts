"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import async from "../app/page";
export const supabaseClient = createClientComponentClient();

export const getPageData = async () => {
  return await supabaseClient.from("static_data").select("*");
};
