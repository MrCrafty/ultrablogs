import Home from "@/components/Home";
import { createServerClient, getPageData } from "@/lib/db";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harsh Mithapara | Blogsite",
};
export default async function Page() {
  const supabase = createServerClient();
  const user = (await supabase.auth.getSession()).data.session?.user
    .user_metadata["firstname"];
  return <>{/* <Home data={user} /> */}</>;
}
