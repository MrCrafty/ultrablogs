import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoToTopButton from "@/components/GoToTopButton";
import dynamic from "next/dynamic";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const DynamicHeader = dynamic(() => import("../components/Header"), {
  loading: () => <Loading />,
});
const DynamicFooter = dynamic(() => import("../components/Footer"), {
  loading: () => <Loading />,
});

export const meta: Metadata = {
  openGraph: {
    title: "Ultra Blogs",
    type: "website",
    url: "https://ultrablogs.in",
    description:
      "Education Blogs, with easy to setup Account and start writing blogs within minutes",
  },
  keywords: [
    "ultrablogs",
    "blogs",
    "ultra",
    "technology",
    "medical",
    "health",
    "travel",
    "trends",
    "science",
    "ultrablogs.in",
    "science",
    "data",
    "data science",
    "india",
    "react",
    "next",
    "supabase",
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " text-black"}>
        <GoToTopButton />
        <header>
          <DynamicHeader />
        </header>
        <main className="pt-24 font-Poppins min-h-screen">
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
        <footer>
          <DynamicFooter />
        </footer>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6662453239066055"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
