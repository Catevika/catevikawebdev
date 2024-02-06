import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import type { Metadata } from "next";
import { barlowCond } from './font';
import "./globals.css";

export const metadata: Metadata = {
  title: "Catevika Web Dev",
  description: "Your tailor-made website proposal in just a few clicks! Let Catevika, a web developer based in Nanterre, France, take care of everything from conception to online deployment. You will get the full control over your website without the limitations of a CMS"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlowCond.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}