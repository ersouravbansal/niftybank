import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trading With AlgoTest",
  description: "Developed By Sourav",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
