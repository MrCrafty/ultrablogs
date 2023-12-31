import { Metadata } from "next";
import dynamic from "next/dynamic";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "UltraBlogs",
  description: "This is YOUR space",
};

const DynamicHome = dynamic(() => import("./Home"), {
  loading: () => <Loading />,
});

export default async function Page() {
  return (
    <>
      <DynamicHome />
    </>
  );
}
