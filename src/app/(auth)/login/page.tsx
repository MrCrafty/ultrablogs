import React from "react";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { createServerClient } from "@/lib/db";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";

const DynamicLogin = dynamic(() => import("../../../components/Login"), {
  loading: () => <Loading />,
});

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

const page = async () => {
  const {
    data: { session },
  } = await createServerClient().auth.getSession();
  if (session != null) {
    return redirect("/");
  } else {
    return <DynamicLogin />;
  }
};
export default page;
