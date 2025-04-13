import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Blog | Latest Articles on React and Modern Web Development",
  description:
    "Read our latest articles on web development, React, and modern frontend techniques",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="site-header">
          <div className="container">
            <nav>
              <a href="/" className="logo">
                TechBlog
              </a>
              <ul className="nav-links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/blog">Articles</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p>
              &copy; {new Date().getFullYear()} TechBlog. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
