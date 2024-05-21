import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./componets/Footer";
import Header from "./componets/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UI Kits para React",
  description: "Este projeto tem como objetivo demonstrar a criação de um site completo utilizando o framework Tailwind CSS em conjunto com o React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">

      <body className={inter.className}>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
