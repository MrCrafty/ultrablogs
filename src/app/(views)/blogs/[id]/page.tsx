import React from "react";
import BlogItem from "./BlogItem";
import { createServerClient } from "@/lib/db";
import { Metadata } from "next";
import CommentBox from "@/components/CommentBox";
import Comments from "@/components/Comments";
import { redirect } from "next/navigation";
import SocialShareButtons from "./SocialShareButtons";

export const metadata: Metadata = {
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
      console.log(res.error);
      return null;
    } else {
      return res.data;
    }
  }
  const res = await createServerClient()
    .from("data")
    .select("comments")
    .eq("id", params.id)
    .limit(1)
    .single();
  const data = await getData(params.id);
  const blogUser = (await createServerClient()
    .from("user_data")
    .select("*")
    .eq("id", data?.user_id))!.data;
  if (data == null) {
    return redirect("/not-found");
  } else {
  }
  return (
    <div className="text-black container">
      <div className="p-4 lg:p-0 lg:w-3/4 mx-auto">
        <BlogItem
          data={data}
          isEditable={user?.id == data?.user_id}
          //@ts-ignore blogUser possibly "Null"
          user={blogUser[0]}
        />
        <SocialShareButtons />
        <CommentBox user={user} blog_id={params.id} />
        <h3 className="text-2xl py-3 my-3">Comments</h3>
        <Comments blog_id={params.id} comments={res.data?.comments} />
      </div>
    </div>
  );
};

export default page;

//Known issue in Nextjs, cookie cannot be accessed inside function other than default

// export const generateStaticParams = async () => {
//   const blogs = await createServerClient().from("data").select("id");
//   const blogposts = blogs.data?.map((data) => {
//     return { id: data.id };
//   });
//   if (blogposts !== undefined) {
//     return blogposts;
//   } else {
//     return [];
//   }
// };
