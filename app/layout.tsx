import type { Metadata } from "next";
import "@/app/styling/globals.css";
import { getStaticQuotes } from "@/app/lib/staticQuotes";

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
  console.log("data flows:", quotesData[0]);

  return (
    <html lang="en">
      <body
        style={{
          filter: "contrast(170%) brightness(100%)",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255, 245, 228, 0.55) 100%), url(/texture.svg)",
          fontFamily: "Garamond, serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
