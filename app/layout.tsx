import type { Metadata } from "next";
import { Roboto, Merienda } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});
const merienda = Merienda({
  variable: "--font-merienda",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marica Nicholas, LPC",
  description:
    "License Professional Counselor in Tomball Magnolia Montgomery Spring TX Texas",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${roboto.variable} ${merienda.variable}`}>
      <body className="min-h-full flex flex-col w-full bg-slate-50 text-slate-700">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
