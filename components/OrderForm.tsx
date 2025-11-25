"use client";

import { useEffect, useState, useMemo } from "react";
import {
  ADDONS,
  AddonId,
  OrderFormData,
  createEmptyOrder,
  calcTotalPrice,
  MEAL_PRICES,
} from "@/lib/menuData";
import { buildWhatsappMessage, openWhatsapp } from "@/lib/whatsapp";

export function OrderForm({
  defaultMeal,
  defaultQty,
}: {
  defaultMeal: string;
  defaultQty: number;
}) {
  const [data, setData] = useState<OrderFormData>(() => {
    const base = createEmptyOrder(defaultMeal);
    return {
      ...base,
      mealQuantity: defaultQty,
    };
  });

  useEffect(() => {
    setData((old) => ({
      ...old,
      mealName: defaultMeal,
      mealQuantity: defaultQty,
    }));
  }, [defaultMeal, defaultQty]);

  const totalPrice = useMemo(() => calcTotalPrice(data), [data]);

  // ⭐ Fix TypeScript Error
  const mealPrice =
    MEAL_PRICES[data.mealName as keyof typeof MEAL_PRICES] || 0;

  const handleAddonChange = (id: AddonId, delta: 1 | -1) => {
    setData((prev) => {
      const current = prev.addonQuantities[id] ?? 0;
      const next = Math.max(0, current + delta);
      return {
        ...prev,
        addonQuantities: { ...prev.addonQuantities, [id]: next },
      };
    });
  };

  const submit = () => {
    if (!data.name.trim()) return alert("الاسم مطلوب");
    if (!data.mobile.trim()) return alert("رقم الموبايل مطلوب");
    if (!data.address.trim()) return alert("العنوان مطلوب");

    const msg = buildWhatsappMessage(data);
    openWhatsapp(msg);
  };

  return (
    <div className="max-w-xl mx-auto">
      {/* Checkout Card */}
      <div className="bg-white rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.12)] overflow-hidden">

        {/* IMAGE */}
        <div className="w-full h-52 bg-gray-200">
          <img
            src="/meal.jpg"
            alt={data.mealName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5 space-y-5">

          {/* Meal Title + Qty */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-extrabold">{data.mealName}</h1>
              <p className="text-gray-600 text-sm mt-1">
                ألذ كبسة ودجاج مشوي بطعم أصلي
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setData((d) => ({
                    ...d,
                    mealQuantity: Math.max(1, d.mealQuantity - 1),
                  }))
                }
                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-lg"
              >
                –
              </button>

              <span className="text-lg font-bold w-6 text-center">
                {data.mealQuantity}
              </span>

              <button
                onClick={() =>
                  setData((d) => ({
                    ...d,
                    mealQuantity: d.mealQuantity + 1,
                  }))
                }
                className="w-8 h-8 flex items-center justify-center bg-[#F7C437] rounded-full text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Price */}
          <p className="text-lg font-bold text-[#C72F1D]">
            {mealPrice} جنيه
          </p>

          {/* Addons */}
          <div>
            <h2 className="font-semibold mb-2">الإضافات</h2>
            <div className="space-y-2">
              {ADDONS.map((addon) => (
                <div
                  key={addon.id}
                  className="flex justify-between items-center bg-gray-50 border border-gray-200 p-3 rounded-2xl"
                >
                  <span className="text-sm font-medium">
                    {addon.name} – {addon.price} جنيه
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleAddonChange(addon.id, -1)}
                      className="w-7 h-7 rounded-full bg-white border flex items-center justify-center"
                    >
                      –
                    </button>
                    <span className="w-6 text-center font-bold">
                      {data.addonQuantities[addon.id] || 0}
                    </span>
                    <button
                      onClick={() => handleAddonChange(addon.id, +1)}
                      className="w-7 h-7 rounded-full bg-[#F7C437] flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Info */}
          <div>
            <h2 className="font-semibold mb-2">بيانات التوصيل</h2>

            <div className="space-y-3">
              <input
                placeholder="الاسم"
                className="input"
                value={data.name}
                onChange={(e) =>
                  setData((d) => ({ ...d, name: e.target.value }))
                }
              />

              <input
                placeholder="رقم الموبايل"
                className="input"
                value={data.mobile}
                onChange={(e) =>
                  setData((d) => ({ ...d, mobile: e.target.value }))
                }
              />

              <input
                placeholder="العنوان بالتفصيل"
                className="input w-full"
                value={data.address}
                onChange={(e) =>
                  setData((d) => ({ ...d, address: e.target.value }))
                }
              />

              <textarea
                placeholder="ملاحظات (اختياري)"
                className="input min-h-[70px]"
                value={data.notes}
                onChange={(e) =>
                  setData((d) => ({ ...d, notes: e.target.value }))
                }
              />
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between text-lg font-bold pt-2">
            <span>الإجمالي:</span>
            <span className="text-[#C72F1D]">{totalPrice} جنيه</span>
          </div>

          {/* Submit Button */}
          <button
            onClick={submit}
            className="w-full py-4 bg-[#F29F05] text-black font-extrabold rounded-full text-lg hover:scale-[1.02] transition"
          >
            تأكيد الطلب على واتساب 💬
          </button>
        </div>
      </div>
    </div>
  );
}