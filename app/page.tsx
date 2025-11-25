import Link from "next/link";
import { Navbar } from "@/components/Navbar";

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

        {/* Search */}
        <div className="mt-6 bg-white rounded-[30px] shadow-[0_8px_25px_rgba(200,50,43,0.10)] p-4 flex items-center gap-3">
          <input
            placeholder="...ابحث عن وجبتك"
            className="flex-1 text-sm outline-none"
          />
          <span className="text-[#C8322B] text-xl">🔍</span>
        </div>
      </section>

      {/* CATEGORY TABS */}
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

      {/* MEAL CARDS */}
      <section className="px-6 mt-6 pb-16 space-y-6">
        {/* CARD 1 */}
        <div className="flex items-center gap-4 bg-white rounded-[30px] p-4 shadow-[0_10px_30px_rgba(200,50,43,0.12)]">
          <div className="w-[80px] h-[80px] rounded-2xl bg-[#F7C948]"></div>

          <div className="flex-1">
            <h3 className="text-lg font-extrabold text-[#A62822]">
              وجبه النص فرخه
            </h3>
            <p className="text-[#C8322B] text-sm">نص فرخة مشوية + أرز</p>

            <div className="mt-2 flex items-center justify-between">
              <span className="text-xl font-bold text-[#F28C38]">222 جنيه</span>

              <Link
                href="/order?meal=وجبه النص فرخه"
                className="bg-[#F28C38] text-white px-4 py-2 rounded-full shadow font-semibold hover:scale-[1.03] transition"
              >
                اطلب الآن
              </Link>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="flex items-center gap-4 bg-white rounded-[30px] p-4 shadow-[0_10px_30px_rgba(200,50,43,0.12)]">
          <div className="w-[80px] h-[80px] rounded-2xl bg-[#F7C948]"></div>

          <div className="flex-1">
            <h3 className="text-lg font-extrabold text-[#A62822]">
              وجبه الفرخه الكامله
            </h3>
            <p className="text-[#C8322B] text-sm">فرخة كاملة مشوية + أرز</p>

            <div className="mt-2 flex items-center justify-between">
              <span className="text-xl font-bold text-[#F28C38]">444 جنيه</span>

              <Link
                href="/order?meal=وجبه الفرخه الكامله"
                className="bg-[#F28C38] text-white px-4 py-2 rounded-full shadow font-semibold hover:scale-[1.03] transition"
              >
                اطلب الآن
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}