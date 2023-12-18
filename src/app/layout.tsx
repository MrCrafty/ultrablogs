import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoToTopButton from "@/components/GoToTopButton";
import dynamic from "next/dynamic";
import Loading from "./loading";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const DynamicHeader = dynamic(() => import("../components/Header"), {
  loading: () => <Loading />,
});
const DynamicFooter = dynamic(() => import("../components/Footer"), {
  loading: () => <Loading />,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Ultra Blogs" />
        <meta property="og:type" content="Website" />
        <meta property="og:URL" content="https://ultrablogs.in" />
        <meta
          property="og:description"
          content="Education Blogs, with easy to setup Account and start writing blogs within minutes"
        />
        <meta name="keywords" content="" />
      </Head>
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
