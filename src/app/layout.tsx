import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logoIcon from "../../public/images/logo.svg";
import profileIcon from "../../public/images/profile.svg";
import Script from "next/script";
import * as React from "react";
import type { YMapLocationRequest } from "ymaps3";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rent",
  description: "Rent-app. Take your home now",
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
        style={{ padding: 0, margin: 0 }}
      >
        <header className="shadow h-16 w-full flex flex-row justify-center items-center gap-200">
          <Link href=".." className="text-black font-extrabold flex flex-row">
            <Image src={logoIcon} alt="" />
            RENT
          </Link>
          <Link href="/auth" className="font-extrabold text-black bg-neutral-100 shadow py-2 px-3 hover:bg-neutral-300 rounded-md flex flex-row gap-2 items-center justify-center transform hover:scale-125 transition ease-in-out duration-200">
            Войти
            <Image src={profileIcon} alt="" />
          </Link>
        </header>
        <main className="flex-1">{children} </main>
        <footer className="shadow w-full bg-gray-200 text-gray-400 font-bold flex justify-center items-center h-16">
          ©TimoourEnterprize
        </footer>
      </body>
    </html>
  );
}
