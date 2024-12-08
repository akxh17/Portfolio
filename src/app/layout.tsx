import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akash Suresh",
  description: "Professional Portfolio of Akash Suresh",
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
