import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Counter from "@/componets/Counter";
import NavLink from "@/componets/NavLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {

  title: {
    default: "Booking App",
    template: "%s - Booking App"
  },
  description: "Find snd book a meeting room.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <strong>Booking App</strong>
          < Counter/>
          <nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/rooms">Rooms</NavLink>
            <NavLink href="/bookings">Bookings</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/bookings/new">New</NavLink>
          </nav>
        </header>
        {children}
         <footer>
          {/* <p>Date: {new Date().toLocaleDateString()}</p> */}
        </footer>
      </body>
    </html>
  );
}

