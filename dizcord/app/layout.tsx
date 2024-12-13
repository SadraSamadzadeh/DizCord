import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

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
      <html lang="en" suppressHydrationWarning>
            <body
              className={cn(
                OpenSans.variable,
                "bg-white dark:bg-[#313338]"
              )}
            >
               <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem={true}
               storageKey="dizcord-theme"
               >
                {children}
               </ThemeProvider>
             
            </body>
      </html>
      </ClerkProvider>
  );
      
}
