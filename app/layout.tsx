import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "fallback" });

export const metadata: Metadata = {
  title: "Marthaya Putra",
  description: `Marthaya Putra's personal site`,
  applicationName: "Marthaya Putra site",
  generator: "NextJs",
  keywords: "nextjs, react, server component, marthaya putra resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mainWrapper">{children}</div>
      </body>
    </html>
  );
}
