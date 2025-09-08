import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wave Lights",
  description: "A simple and elegant note-taking application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}