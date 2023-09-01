import Navbar from "@/components/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Chela_One } from "next/font/google";
import { Providers } from "@/redux/Provider";
import Cart from "@/components/Cart";
import Success from "@/components/Success";

const chela = Chela_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-chela",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Pizza delivery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-neutral-50">
      <body
        className={`${chela.variable} font-chela ${inter.variable} bg-neutral-50 text-slate-700 relative`}
      >
        <Providers>
          <Navbar />
          <Success />
          {children}
          <Cart />
        </Providers>
      </body>
    </html>
  );
}
