import "./globals.css";
import { Ubuntu, Inter } from "next/font/google";
import { siteConfig } from "../../config/site";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata = {
  title: `${siteConfig.name}`,
  description: `${siteConfig.description}`,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "zod",
  ],
  authors: [
    {
      name: "Adefeso Qudus",
      url: "https://qdus.netlify.app",
    },
  ],
  creator: "Adefeso Qudus",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${ubuntu.variable}  font-sans`}>{children}</body>
    </html>
  );
}
