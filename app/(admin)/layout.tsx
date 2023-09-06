import "../globals.css";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";

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
    <html lang="en">
      <body className={`${oswald.className} font-oswald`}>{children}</body>
    </html>
  );
}
