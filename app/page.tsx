import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MealCard } from "@/components/MealCard";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto">
      <Navbar />
      <Hero />
      <section className="p-4 space-y-4">
        <h2 className="text-2xl font-bold">اختر وجبتك</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <MealCard name="وجبه النص فرخه" description="نص فرخة مشوية + أرز" />
          <MealCard name="وجبه الفرخه الكامله" description="فرخة كاملة مشوية + أرز" />
        </div>
      </section>
    </div>
  );
}