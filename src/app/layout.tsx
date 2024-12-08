import type { Metadata } from "next";
import localFont from 'next/font/local';
import './globals.scss';
import { Header } from "@/components/Blocks/blocks";

const sfBold = localFont({
  src: '../fonts/SF-Pro-Display-Bold.otf',
  variable: '--sfBold'
});
const sfSemibold = localFont({
  src: '../fonts/SF-Pro-Display-Semibold.otf',
  variable: '--sfSemibold'
});
const sfMedium = localFont({
  src: '../fonts/SF-Pro-Display-Medium.otf',
  variable: '--sfMedium'
});
const sfRegular = localFont({
  src: '../fonts/SF-Pro-Text-Regular.otf',
  variable: '--sfRegular'
});


export const metadata: Metadata = {
  title: "Bang UI",
  description: "Next.js UI library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sfBold.variable} ${sfSemibold.variable} ${sfMedium.variable} ${sfRegular.variable}`}>
        <Header />
        <div className="all">
          {children}
        </div>
      </body>
    </html>
  );
}