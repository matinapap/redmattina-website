import "../styles/globals.css";
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 

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
      <body className="flex flex-col min-h-screen font-sans bg-pink-50 text-gray-800">
        {/* 🔹 Header */}
        <Header />
        <main>
          {children}
        </main>
        {/* 🔹 Footer */}
        <Footer />
      </body>
    </html>
  );
}
