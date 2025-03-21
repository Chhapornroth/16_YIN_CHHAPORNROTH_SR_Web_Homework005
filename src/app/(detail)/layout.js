import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
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
    <div className={`${rubik.className} antialiased`}>
      <div style={{ width: "100%", height: "100%" }} className="bg-gray-50">
        {children}
      </div>
    </div>
  );
}
