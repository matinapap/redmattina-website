import "../styles/globals.css";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen font-sans bg-pink-50 text-gray-800">
        {/* 🔹 Header */}
        <Header />
        <main className="flex-1 min-h-0">
          {children}
        </main>
        {/* 🔹 Footer */}
        <Footer />
      </body>
    </html>
  );
}
