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
  title: "لمدونة | عقدي - مقالات وأخبار عن الإيجار العقاري",
  description:
    "عقدي هو منصة إلكترونية متكاملة تقدم حلولًا مبتكرة لتنظيم وتطوير قطاع الإيجار العقاري بالتعاون مع برنامج إيجار والهيئة العامة للعقار.",
  verification: {
    google: "QUTDt7oN3URTv9kB7ffdaeeBw2CDkbet1eaQFeCJ1d4",
  },
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
