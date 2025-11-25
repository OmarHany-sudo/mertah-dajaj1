import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <section className="px-6 pt-10 pb-14 text-center">
        <h1 className="text-3xl font-extrabold leading-snug text-black">
          مطبخ كبسة <span className="text-yellow-500">مرتاح دجاج</span>
        </h1>

        <p className="text-gray-700 mt-3 text-lg font-medium">
          أفضل كبسة ودجاج مشوي بطعم سعودي أصيل.
        </p>

        <Link
          href="/order?meal=وجبه النص فرخه"
          className="inline-block mt-6 px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold text-lg shadow-lg hover:scale-[1.03] transition"
        >
          اطلب الآن
        </Link>
      </section>

      {/* MEALS */}
      <section className="px-6 space-y-4 pb-14">
        <h2 className="text-2xl font-bold text-black">اختر وجبتك</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* MEAL CARD 1 */}
          <article className="bg-white rounded-3xl p-6 shadow-[0_10px_25px_rgba(0,0,0,0.07)] border border-gray-100 hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)] transition">
            <h3 className="text-xl font-bold text-black">وجبه النص فرخه</h3>
            <p className="text-gray-600 mt-1">نص فرخة مشوية + أرز</p>

            <p className="mt-4 text-2xl font-extrabold text-yellow-600">222 جنيه</p>

            <Link
              href="/order?meal=وجبه النص فرخه"
              className="block mt-5 bg-yellow-400 text-black font-semibold text-center py-3 rounded-full shadow-md hover:scale-[1.02] transition"
            >
              اطلب الآن
            </Link>
          </article>

          {/* MEAL CARD 2 */}
          <article className="bg-white rounded-3xl p-6 shadow-[0_10px_25px_rgba(0,0,0,0.07)] border border-gray-100 hover:shadow-[0_12px_30px_rgba(0,0,0,0.10)] transition">
            <h3 className="text-xl font-bold text-black">وجبه الفرخه الكامله</h3>
            <p className="text-gray-600 mt-1">فرخة كاملة مشوية + أرز</p>

            <p className="mt-4 text-2xl font-extrabold text-yellow-600">444 جنيه</p>

            <Link
              href="/order?meal=وجبه الفرخه الكامله"
              className="block mt-5 bg-yellow-400 text-black font-semibold text-center py-3 rounded-full shadow-md hover:scale-[1.02] transition"
            >
              اطلب الآن
            </Link>
          </article>

        </div>
      </section>
    </div>
  );
}