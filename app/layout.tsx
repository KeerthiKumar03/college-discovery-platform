import type { Metadata } from "next";
import LogoutButton from "@/components/LogOutButton";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "College Discovery Platform",
  description: "Find, compare and explore colleges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-black text-white">
        <nav className="bg-gray-900 border-b border-gray-700 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="font-bold text-2xl text-white">
              College Discovery
            </h1>

            <div className="flex gap-6">
              <Link
                href="/"
                className="text-white hover:text-blue-400 transition"
              >
                Home
              </Link>

              <Link
                href="/compare"
                className="text-white hover:text-blue-400 transition"
              >
                Compare
              </Link>

              <Link
                href="/saved"
                className="text-white hover:text-blue-400 transition"
              >
                Saved
              </Link>

              <Link
  href="/login"
  className="hover:text-blue-400"
>
  Login
</Link>

<Link
  href="/signup"
  className="hover:text-blue-400"
>
  Signup
</Link>

<LogoutButton />
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}