import type { Metadata } from "next";
import { Roboto, Merienda } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
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
    <html
      lang="en"
      className={`${merienda.variable} ${roboto.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-roboto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
