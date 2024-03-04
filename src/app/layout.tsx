import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import ReactQueryProvider from "../../providers/ReactQueryProvider";

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
        <ReactQueryProvider>
          <div className="flex">
            <Sidebar />
            <div className="bg-gradient-to-b from-sky-50 to-slate-200 p-4 w-full">{children}</div>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
