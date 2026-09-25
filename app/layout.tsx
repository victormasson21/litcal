import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Text } from "next/font/google";
import "@/app/globals.css";

const caslon = Libre_Caslon_Text({ weight: "400", subsets: ["latin"] });

const APP_NAME = "Seasons";

export const metadata: Metadata = {
  title: APP_NAME,
  description: "A literary calendar",
  appleWebApp: { capable: true, title: APP_NAME },
};

export const viewport: Viewport = {
  themeColor: "#FFF5E4",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={caslon.className}>
        {children}
      </body>
    </html>
  );
}
