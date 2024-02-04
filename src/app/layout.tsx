import type { Metadata } from "next";
import { barlowCond } from './font';
import "./globals.css";

export const metadata: Metadata = {
  title: "Catevika Web Dev",
  description: "Your tailor-made website proposal in just a few clicks! Let Catevika, a web developer based in Nanterre, France, take care of everything from design to online deployment."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlowCond.className}>{children}</body>
    </html>
  );
}
