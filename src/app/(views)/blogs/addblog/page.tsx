import React from "react";
import { redirect } from "next/navigation";
import { createServerClient } from "@/lib/db";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";

export const metadata: Metadata = {
  title: "Add Blog",
  description: "Add Blog",
};

const DynamicForm = dynamic(() => import("./AddBlogForm"), {
  loading: () => <Loading />,
});

const page = async () => {
  const {
    data: { session },
  } = await createServerClient().auth.getSession();
  if (session == null) {
    return redirect("/login");
  } else {
    return (
      <>
        <DynamicForm />
      </>
    );
  }
};

export default page;
