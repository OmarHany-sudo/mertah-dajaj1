import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-6 pb-12 text-center">
        <div className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full shadow-md">
          اطلب الآن
        </div>

        <h1 className="text-3xl font-extrabold mt-6 leading-snug">
          مطبخ كبسة <span className="text-yellow-500">مرتاح دجاج</span>
        </h1>

        <p className="text-gray-600 mt-2 text-lg">
          أفضل كبسة ودجاج مشوي بطعم سعودي أصيل.
        </p>
      </section>

      {/* Meals section */}
      <section className="px-6 space-y-4">
        <h2 className="text-2xl font-bold">اختر وجبتك</h2>

        <div className="grid md:grid-cols-2 gap-5">

          {/* Meal 1 */}
          <article className="rounded-3xl bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100">
            <h3 className="text-xl font-bold mb-2">وجبه النص فرخه</h3>
            <p className="text-gray-600">نص فرخة مشوية + أرز</p>
            <p className="mt-3 text-xl font-extrabold text-yellow-600">222 جنيه</p>

            <Link
              href="/order?meal=وجبه النص فرخه"
              className="block mt-4 bg-yellow-400 text-black font-semibold text-center py-3 rounded-full shadow-md hover:scale-[1.02] transition"
            >
              اطلب الآن
            </Link>
          </article>

          {/* Meal 2 */}
          <article className="rounded-3xl bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100">
            <h3 className="text-xl font-bold mb-2">وجبه الفرخه الكامله</h3>
            <p className="text-gray-600">فرخة كاملة مشوية + أرز</p>
            <p className="mt-3 text-xl font-extrabold text-yellow-600">444 جنيه</p>

            <Link
              href="/order?meal=وجبه الفرخه الكامله"
              className="block mt-4 bg-yellow-400 text-black font-semibold text-center py-3 rounded-full shadow-md hover:scale-[1.02] transition"
            >
              اطلب الآن
            </Link>
          </article>

        </div>
      </section>
    </div>
  );
}