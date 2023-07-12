import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex gap-6 w-full h-14 px-8 items-center justify-center text-3xl bg-slate-900">
          <Link href="/" className="hover:scale-125 ease-in duration-100">
            Home
          </Link>
          <Link href="/posts" className="hover:scale-125 ease-in duration-100">
            posts
          </Link>
          <Link
            href="/articles"
            className="hover:scale-125 ease-in duration-100"
          >
            articles
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
