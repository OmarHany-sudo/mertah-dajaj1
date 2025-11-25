import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { MEALS } from "@/lib/menuData";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFF7F3]">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pt-6">
        <h1 className="text-3xl font-extrabold leading-snug text-[#A62822]">
          مطبخ كبسة <span className="text-[#F28C38]">مرتاح دجاج</span>
        </h1>

        <p className="text-[#C8322B] mt-2 text-lg font-medium">
          أقوى كبسة ودجاج مشوي بطعم سعودي أصيل.
        </p>

        {/* Search bar */}
        <div className="mt-6 bg-white rounded-[30px] shadow-[0_8px_25px_rgba(200,50,43,0.10)] p-4 flex items-center gap-3">
          <input
            placeholder="...ابحث عن وجبتك"
            className="flex-1 text-sm outline-none bg-transparent"
          />
          <span className="text-[#C8322B] text-xl">🔍</span>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 mt-6">
        <div className="flex gap-3 overflow-x-auto text-sm font-semibold">
          <button className="px-5 py-2 rounded-full bg-[#F28C38] text-white shadow">
            الوجبات
          </button>
          <button className="px-5 py-2 rounded-full bg-white text-[#C8322B] shadow border border-[#F7C948]">
            مشويات
          </button>
          <button className="px-5 py-2 rounded-full bg-white text-[#C8322B] shadow border border-[#F7C948]">
            إضافات
          </button>
        </div>
      </section>

      {/* MEAL CARDS – زي العمود اللي في نص الصورة */}
      <section className="px-6 mt-6 pb-16 space-y-4">
        {MEALS.map((meal) => (
          <Link
            key={meal.id}
            href={`/meal/${meal.id}`}
            className="block bg-white rounded-[26px] p-4 shadow-[0_8px_24px_rgba(200,50,43,0.12)] active:scale-[0.98] transition"
          >
            <div className="flex items-center gap-4">
              {/* Placeholder للصورة – تقدر تحط Image فعلي بعدين */}
              <div className="w-[72px] h-[72px] rounded-2xl bg-[#F7C948]" />

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base font-extrabold text-[#A62822]">
                    {meal.name}
                  </h3>
                  {meal.badge && (
                    <span className="text-[10px] px-2 py-1 rounded-full bg-[#FCE4D6] text-[#C8322B] font-bold">
                      {meal.badge}
                    </span>
                  )}
                </div>

                <p className="text-[#C8322B] text-xs mt-1">
                  {meal.description}
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-bold text-[#F28C38]">
                    {meal.price} جنيه
                  </span>
                  <span className="text-xs text-[#C8322B]">
                    اضغط للتفاصيل والطلب
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}