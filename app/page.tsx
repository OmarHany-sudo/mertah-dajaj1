import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="px-6 pt-6">
        <h1 className="text-3xl font-extrabold leading-snug text-black">
          مطبخ كبسة <span className="text-yellow-500">مرتاح دجاج</span>
        </h1>

        <p className="text-gray-600 mt-2 text-lg">
          أفضل كبسة ودجاج مشوي بطعم سعودي أصيل.
        </p>

        {/* Search Styled Like Image */}
        <div className="mt-6 bg-white rounded-[30px] shadow-[0_8px_25px_rgba(0,0,0,0.08)] p-4 flex items-center gap-3">
          <input
            placeholder="...ابحث عن وجبتك"
            className="flex-1 text-sm outline-none"
          />
          <span className="text-gray-500">🔍</span>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="px-6 mt-6">
        <div className="flex gap-3 overflow-x-auto text-sm font-semibold">
          <button className="px-5 py-2 rounded-full bg-yellow-400 text-black shadow">
            الوجبات
          </button>
          <button className="px-5 py-2 rounded-full bg-white text-gray-600 shadow">
            مشويات
          </button>
          <button className="px-5 py-2 rounded-full bg-white text-gray-600 shadow">
            إضافات
          </button>
        </div>
      </section>

      {/* MEAL CARDS LIKE DESIGN */}
      <section className="px-6 mt-6 pb-16 space-y-6">
        {/* CARD 1 */}
        <div className="flex items-center gap-4 bg-white rounded-[30px] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.07)]">
          <div className="w-[80px] h-[80px] rounded-2xl bg-[#ffeb99]"></div>

          <div className="flex-1">
            <h3 className="text-lg font-extrabold">وجبه النص فرخه</h3>
            <p className="text-gray-500 text-sm">نص فرخة مشوية + أرز</p>

            <div className="mt-2 flex items-center justify-between">
              <span className="text-xl font-bold text-yellow-600">222 جنيه</span>

              <Link
                href="/order?meal=وجبه النص فرخه"
                className="bg-yellow-400 text-black px-4 py-2 rounded-full shadow font-semibold hover:scale-[1.03] transition"
              >
                اطلب الآن
              </Link>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="flex items-center gap-4 bg-white rounded-[30px] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.07)]">
          <div className="w-[80px] h-[80px] rounded-2xl bg-[#ffeb99]"></div>

          <div className="flex-1">
            <h3 className="text-lg font-extrabold">وجبه الفرخه الكامله</h3>
            <p className="text-gray-500 text-sm">فرخة كاملة مشوية + أرز</p>

            <div className="mt-2 flex items-center justify-between">
              <span className="text-xl font-bold text-yellow-600">444 جنيه</span>

              <Link
                href="/order?meal=وجبه الفرخه الكامله"
                className="bg-yellow-400 text-black px-4 py-2 rounded-full shadow font-semibold hover:scale-[1.03] transition"
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