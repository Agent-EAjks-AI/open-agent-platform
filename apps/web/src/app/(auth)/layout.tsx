import React from "react";
import AuthLayout from "./auth-layout";
import { AuthProvider } from "@/providers/Auth";
import type { Metadata } from "next";
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  title: "Open Agent Platform - Auth",
  description: "Open Agent Platform by LangChain",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed top-0 left-0 right-0 bg-[#CFC8FE] text-black py-2 text-center z-50 shadow-md">
          You're currently using the demo application. To use your own agents, and run in production, check out the <a className="underline underline-offset-2" href={DOCS_LINK} target="_blank" rel="noopener noreferrer">documentation</a>
        </div>
        <AuthProvider>
          <AuthLayout>{children}</AuthLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
