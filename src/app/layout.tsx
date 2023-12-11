import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import GoToTopButton from "@/components/GoToTopButton";

const inter = Inter({ subsets: ["latin"] });

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
          <Header />
        </header>
        <main className="pt-24 font-Poppins">
          {children}
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
