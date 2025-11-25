"use client";

export const dynamic = "force-dynamic";

import { Navbar } from "@/components/Navbar";
import { OrderForm } from "@/components/OrderForm";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrderPage() {
  const searchParams = useSearchParams();

  const mealFromUrl = searchParams.get("meal") || "";
  const qtyFromUrl = Number(searchParams.get("qty") || 1);

  const [initialData, setInitialData] = useState<{
    meal: string;
    qty: number;
  } | null>(null);

  // أول ما الصفحة تفتح، نخزن البيانات الجاية من URL
  useEffect(() => {
    setInitialData({
      meal: mealFromUrl,
      qty: qtyFromUrl,
    });
  }, [mealFromUrl, qtyFromUrl]);

  if (!initialData) return null;

  return (
    <div className="min-h-screen max-w-4xl mx-auto pb-10">
      <Navbar />
      <main className="px-4 md:px-8 pb-8">
        <OrderForm
          defaultMeal={initialData.meal}
          defaultQty={initialData.qty}
        />
      </main>
    </div>
  );
}