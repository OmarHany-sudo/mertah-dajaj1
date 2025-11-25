"use client";

import { useState } from "react";
import Link from "next/link";
import { getMealById } from "@/lib/menuData";

interface MealPageProps {
  params: { id: string };
}

export default function MealPage({ params }: MealPageProps) {
  const meal = getMealById(params.id);

  const [qty, setQty] = useState(1);

  if (!meal) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF7F3]">
        <p className="text-[#A62822] font-bold">الوجبة غير موجودة.</p>
      </div>
    );
  }

  const total = meal.price * qty;

  return (
    <div className="min-h-screen bg-[#FFF7F3] px-6 pt-6 pb-10 flex flex-col">
      {/* Back */}
      <div className="flex items-center justify-between mb-4">
        <Link href="/" className="text-[#C8322B] text-2xl">
          ←
        </Link>
        <span className="font-bold text-[#C8322B]">تفاصيل الوجبة</span>
        <div />
      </div>

      {/* TOP CARD زي التصميم */}
      <div className="bg-gradient-to-b from-[#FFE2CF] to-white rounded-[32px] shadow-[0_18px_40px_rgba(200,50,43,0.20)] p-6 mb-6">
        {/* هنا ممكن تحط صورة الكبسة */}
        <div className="w-40 h-40 mx-auto rounded-full bg-[#F7C948] mb-4" />

        <h1 className="text-xl font-extrabold text-center text-[#A62822]">
          {meal.name}
        </h1>
        <p className="text-center text-[#C8322B] text-sm mt-2">
          {meal.description}
        </p>

        {/* Quantity */}
        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-xl text-[#C8322B]"
          >
            –
          </button>
          <span className="w-10 text-center text-lg font-bold text-[#A62822]">
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="w-9 h-9 rounded-full bg-[#F28C38] shadow flex items-center justify-center text-xl text-white"
          >
            +
          </button>
        </div>
      </div>

      {/* BOTTOM / SUMMARY + CTA */}
      <div className="mt-auto space-y-4">
        <div className="bg-white rounded-[24px] p-4 shadow-[0_10px_30px_rgba(200,50,43,0.12)]">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#C8322B]">إجمالي الطلب</span>
            <span className="text-xl font-extrabold text-[#F28C38]">
              {total} جنيه
            </span>
          </div>
        </div>

        {/* زر الذهاب لصفحة إنهاء الطلب /order */}
        <Link
          href={`/order?meal=${encodeURIComponent(
            meal.name
          )}&qty=${qty.toString()}`}
          className="block text-center w-full bg-[#F28C38] text-white font-semibold py-3 rounded-full shadow-[0_12px_30px_rgba(200,50,43,0.30)] hover:scale-[1.02] transition"
        >
          أكمل الطلب
        </Link>
      </div>
    </div>
  );
}