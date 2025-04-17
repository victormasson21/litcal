import type { Metadata } from "next";
import { Libre_Caslon_Text } from "next/font/google";
import "@/app/globals.css";

const caslon = Libre_Caslon_Text({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seasons",
  description: "A literary calendar",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={caslon.className}>{children}</body>
    </html>
  );
}
