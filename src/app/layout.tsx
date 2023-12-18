import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoToTopButton from "@/components/GoToTopButton";
import dynamic from "next/dynamic";
import Loading from "./loading";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  icons: {
    icon: "/public/favicon.ico",
  },
};

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
      <body className={inter.className + " text-black"}>
        <GoToTopButton />
        <header>
          <DynamicHeader />
        </header>
        <main className="pt-24 font-Poppins min-h-screen">
          {children}
          <SpeedInsights />
        </main>
        <footer>
          <DynamicFooter />
        </footer>
      </body>
    </html>
  );
}
