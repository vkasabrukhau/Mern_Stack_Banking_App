import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: '--font-ibm-plex-serif',
  weight: ["400", '700'], // 400 is the regular weight, 700 is the bold weight
  display: "swap", // "swap" means the font will load asynchronously, "block" means it will load synchronously
})


export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platofmr for everyone",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
