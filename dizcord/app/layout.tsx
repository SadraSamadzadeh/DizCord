import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const OpenSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DizCord",
  description: "A Discord client for the 21st century.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <ClerkProvider>
      <html lang="en">
            <body
              className={`${OpenSans.variable} antialiased`}
            >
              {children}
            </body>
      </html>
      </ClerkProvider>
  );
      
}
