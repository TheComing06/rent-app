import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logoIcon from "../../public/images/logo.svg";
import profileIcon from "../../public/images/profile.svg";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rent: Home",
  description: "Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="shadow h-16 w-full flex flex-row justify-center items-center gap-200">
          <h1 className="text-black font-extrabold flex flex-row">
            <Image src={logoIcon} alt="" />
            RENT
          </h1>
          <button className="font-extrabold text-black bg-neutral-100 shadow py-2 px-3 hover:bg-neutral-300 rounded-md flex flex-row gap-2 items-center justify-center">
            Войти
            <Image src={profileIcon} alt="" />
          </button>
        </header>
        <main className="flex-1">
          {children} <Script src=""></Script>
        </main>
        <footer className="shadow w-full bg-gray-200 text-gray-400 font-bold flex justify-center items-center h-16">
          ©TimoourEnterprize
        </footer>
      </body>
    </html>
  );
}
