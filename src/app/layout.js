import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Rubik } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
