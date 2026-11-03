import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

// Google Font configuration
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Raghav Balaji | Full Stack Developer",
    template: "%s | Raghav Balaji",
  },

  description:
    "Raghav Balaji - Full Stack Developer specializing in React, Next.js, Python and Cloud Technologies.",

  keywords: [
    "Raghav Balaji",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "AWS",
  ],

  authors: [{ name: "Raghav Balaji" }],

  openGraph: {
    title: "Raghav Balaji | Full Stack Developer",
    description:
      "Explore my portfolio, technical skills and development projects.",
    type: "website",
  },
};

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}