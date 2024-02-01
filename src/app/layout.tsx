import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Gestor de Carteiras",
  description: "Nosso gestor de carteiras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex">
          <Sidebar />
          <div className="p-4 w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
