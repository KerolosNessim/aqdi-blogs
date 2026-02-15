import type { Metadata } from "next";
import "./globals.css";
import { Cairo, Inter } from "next/font/google";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "منصة عقدي - عقد إيجار إلكتروني موثق خلال 30 دقيقة",
  description: "احصل على عقد إيجار إلكتروني موثق من شبكة إيجار خلال 30 دقيقة عبر موقع عقدي. خدمة سريعة وسهلة لتلبية جميع احتياجاتك في المملكة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={inter.variable}>
      <body className={`${cairo.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
