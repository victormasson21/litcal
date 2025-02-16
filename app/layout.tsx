import type { Metadata } from "next";
import { Libre_Caslon_Text } from "next/font/google";
import "@/app/styling/globals.css";

const caslon = Libre_Caslon_Text({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LitCal",
  description: "Another pointless project",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={caslon.className}
        style={{
          filter: "contrast(170%) brightness(100%)",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255, 245, 228, 0.55) 100%), url(/texture.svg)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "48px",
        }}
      >
        <main style={{ maxWidth: "750px" }}>{children}</main>
      </body>
    </html>
  );
}
