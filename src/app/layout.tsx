import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const firacode = Fira_Code({
  variable: "--font-firacode",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ecthon",
  description: "Software developer and UI Design enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firacode.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex flex-col w-full space-y-6">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
