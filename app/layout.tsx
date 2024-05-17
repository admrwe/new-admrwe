import type { Metadata } from "next";
import { Xanh_Mono } from "next/font/google";
import "./globals.css";

const xanh = Xanh_Mono({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-xanh",
});

export const metadata: Metadata = {
  title: "Adam Rowe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${xanh.variable}`}>{children}</body>
    </html>
  );
}
