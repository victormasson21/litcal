import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/styling/globals.css";
import { getStaticQuotes } from "@/app/lib/staticQuotes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LitCal",
  description: "Another pointless project",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: move from layout?
  const quotesData = await getStaticQuotes();
  console.log({ quotesData });

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
