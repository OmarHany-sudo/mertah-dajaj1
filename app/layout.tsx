import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "مرتاح دجاج | كبسة ودجاج مشوي | توصيل الشروق والقاهرة",
  description:"أقوى كبسة ودجاج مشوي بطعم سعودي أصيل."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}