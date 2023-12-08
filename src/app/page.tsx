import Home from "@/components/Home";
import { getPageData } from "@/lib/db";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harsh Mithapara | Blogsite",
};
export default async function Page() {
  return (
    <>
      <Home data={await getPageData()} />
    </>
  );
}
