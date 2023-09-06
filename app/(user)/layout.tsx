import Navbar from "@/components/Navbar";
import "../globals.css";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { Providers } from "@/redux/Provider";
import Modal from "@/components/Modal";
const oswald = Oswald({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-oswald",
});

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
        className={`${oswald.variable} font-oswald bg-neutral-50 text-slate-700 relative`}
      >
        <Providers>
          <Navbar />
          <Modal />
          {children}
        </Providers>
      </body>
    </html>
  );
}
