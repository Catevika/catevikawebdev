import { oxygen } from '@/app/font';
import "@/app/globals.css";
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { Providers } from '@/theme/ThemeProvider';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catevika Web Dev",
  description: "Your tailor-made website proposal in just a few clicks! Let Catevika, a web developer based in Nanterre, France, take care of everything from conception to online deployment. Get the full control over your website without limitations."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={oxygen.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
