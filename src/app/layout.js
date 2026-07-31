import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Component/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevNihad | MERN Stack Developer",
  description:
    "Portfolio of Nihad — a MERN Stack & Full-Stack Web Developer specializing in React, Next.js, Node.js, Express, and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}