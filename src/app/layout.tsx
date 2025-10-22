import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RedMattina",
  description: "Under Construction Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
