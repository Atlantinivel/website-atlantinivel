import { Header } from "@/components/own/header/header";
import Link from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: "3rem",
        }}
      >
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  );
}
