import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "PILLYI G SHANKAR | Frontend & Full-Stack Developer",
  description: "Premium modern portfolio of PILLYI G SHANKAR, Computer Science Engineering student and Full-Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
