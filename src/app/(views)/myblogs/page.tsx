import React from "react";
import BlogList from "./BlogList";
import { createServerClient, getPageData } from "@/lib/db";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async () => {
  const supabase = createServerClient();
  const data = await supabase
    .from("data")
    .select("*")
    .order("inserted_at", { ascending: false })
    .eq("user_id", (await supabase.auth.getSession()).data.session?.user.id);
  const pageData = await getPageData();
  const count = data?.data?.length ?? 0;
  const {
    data: { session },
  } = await createServerClient().auth.getSession();
  if (session == null) {
    return redirect("/");
  } else {
    return (
      <div className="w-11/12 lg:w-1/2 mx-auto">
        {count >= 1 ? (
          <BlogList data={data} />
        ) : (
          <p className="text-xl">
            {pageData?.my_blogs?.error_message}
            <Link
              href={pageData?.my_blogs?.error_link}
              className="text-blue-400"
            >
              {" "}
              {pageData?.my_blogs?.error_text}
            </Link>
          </p>
        )}
      </div>
    );
  }
};

export default page;
