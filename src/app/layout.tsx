import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google";
import "./globals.css";

const anek = Anek_Latin({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GESHDO - What can we offer",
  description: "Perks and benefits of working at GESHDO",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anek.className}  antialiased`}>{children}</body>
    </html>
  );
}
