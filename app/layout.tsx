import type { Metadata } from "next";
import { Bagel_Fat_One, Chango, Xanh_Mono } from "next/font/google";
import "./globals.css";

const bagel = Bagel_Fat_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bagel",
});

const chango = Chango({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-chango",
});

const xanh = Xanh_Mono({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-xanh",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bagel.variable} ${chango.variable} ${xanh.variable}`}>
        {children}
      </body>
    </html>
  );
}
