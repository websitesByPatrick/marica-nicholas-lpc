import type { Metadata } from "next";
import { Roboto, Merienda } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer";
import ScrollToTop from "./components/scroll-to-top";

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
    "Marica Nicholas, LPC, provides compassionate counseling for children and adults in Tomball, Texas, supporting clients with anxiety, depression, trauma, relationships, and life transitions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${roboto.variable} ${merienda.variable}`}>
      <body className="min-h-full flex flex-col w-full bg-slate-50 text-slate-700">
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
