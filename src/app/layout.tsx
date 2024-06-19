"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BrowserRouter } from 'react-router-dom'
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <body> 
        {children}
      </body>
    </html>
  );
}
