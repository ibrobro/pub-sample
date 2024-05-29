import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { inter } from '@/app/ui/fonts';
import Header from "@/app/ui/header/header";
import Content from "@/app/ui/main-layout/content/content";
import Footer from "@/app/ui/main-layout/footer/footer";
import SessionProvider from '@/app/lib/session/SessionProvider';
import "./globals.css";


export const metadata: Metadata = {
  title: "CP Example",
  description: "Company Profile Website Sample",
};


export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div className="flex flex-col">
            <Header />
              {children}
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
