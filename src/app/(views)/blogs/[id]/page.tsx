import React from "react";
import BlogItem from "./BlogItem";
import { createServerClient } from "@/lib/db";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Blog Page`,
  description: "Blog Page",
};
const page = async ({ params }: { params: { id: string } }) => {
  const user = (await createServerClient().auth.getSession()).data.session
    ?.user;
  async function getData(id: string) {
    const res = await createServerClient()
      .from("data")
      .select()
      .eq("id", id)
      .limit(1)
      .single();
    if (res.error) {
      return res.error.message;
    } else {
      return res.data;
    }
  }
  const data = await getData(params.id);
  const blogUser = (await createServerClient()
    .from("user_data")
    .select("*")
    .eq("id", data?.user_id))!.data;

  return (
    <div className="text-black container">
      <div className="w-11/12 lg:w-1/2 mx-auto">
        <BlogItem
          data={data}
          isEditable={user?.id == data?.user_id}
          //@ts-ignore blogUser possibly "Null"
          user={blogUser[0]}
        />
      </div>
    </div>
  );
};

export default page;
