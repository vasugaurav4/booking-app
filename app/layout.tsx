import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
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
    template: "%s - Booking App",
  },
  description: "Find snd book a meeting room.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
          <div className="bg-white dark:bg-black">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-2xl font-bold tracking-tight">
                <span className="text-blue-600">Booking</span>
                <span className="text-gray-900">App</span>
              </Link>

              <div className="hidden items-center gap-8 md:flex">
                <NavLink
                  href="/"
                  // className="font-medium text-blue-600 transition hover:text-blue-800"
                >
                  Home
                </NavLink>

                <NavLink
                  href="/rooms"
                  // className="font-medium text-gray-600 transition hover:text-blue-600"
                >
                  Rooms
                </NavLink>

                <NavLink
                  href="/bookings"
                  // className="font-medium text-gray-600 transition hover:text-blue-600"
                >
                  Bookings
                </NavLink>

                <NavLink
                  href="/about"
                  // className="font-medium text-gray-600 transition hover:text-blue-600"
                >
                  About
                </NavLink>

                <NavLink
                  href="/bookings/new"
                  // className="font-medium text-gray-600 transition hover:text-blue-600"
                >
                  New Booking
                </NavLink>
              </div>
            </nav>
          </div>
        </header>
        {children}
        <footer className="fixed bottom-0 right-2 text-gray-500">
          <p>Date: {new Date().toLocaleDateString()}</p>
        </footer>
      </body>
    </html>
  );
}