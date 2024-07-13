import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "MTRNSoc Sumobots 2024",
  description: "Official UNSW MTRNSoc Sumobots 2024 website.",
  icons: { icon: "/icon.svg" },
  twitter: {
    card: "summary_large_image",
    title: "MTRNSoc Sumobots 2024",
    site: "@site",
    creator: "@creator",
    images: "https://unsw-mechatronics-society.github.io/sumobots/og.jpg",
  },
  openGraph: {
    type: "website",
    url: "https://unsw-mechatronics-society.github.io/sumobots/",
    title: "MTRNSoc Sumobots 2024",
    description: "Official UNSW MTRNSoc Sumobots 2024 website.",
    siteName: "MTRNSoc Sumobots 2024",
    images: "https://unsw-mechatronics-society.github.io/sumobots/og.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-white bg-black font-main text-2xl">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
