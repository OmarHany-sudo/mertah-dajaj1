"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  ADDONS,
  AddonId,
  OrderFormData,
  createEmptyOrder,
  calcTotalPrice,
  MEAL_PRICES,
} from "@/lib/menuData";
import { buildWhatsappMessage, openWhatsapp } from "@/lib/whatsapp";

export function OrderForm() {
  const searchParams = useSearchParams();
  const mealFromUrl = searchParams.get("meal") || "وجبه النص فرخه";
  const [data, setData] = useState<OrderFormData>(() =>
    createEmptyOrder(mealFromUrl)
  );

  useEffect(() => {
    setData((old) => ({ ...old, mealName: mealFromUrl }));
  }, [mealFromUrl]);

  const totalPrice = useMemo(() => calcTotalPrice(data), [data]);

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
    if (!data.name.trim()) {
      alert("الاسم مطلوب");
      return;
    }
    if (!data.mobile.trim()) {
      alert("رقم الموبايل مطلوب");
      return;
    }
    if (!data.address.trim()) {
      alert("العنوان مطلوب");
      return;
    }

    const msg = buildWhatsappMessage(data);
    openWhatsapp(msg);
    setData(createEmptyOrder(mealFromUrl));
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-[0_18px_40px_rgba(0,0,0,0.10)] p-5 md:p-8 space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-extrabold">اطلب الآن من مرتاح دجاج</h1>
        <p className="text-sm text-gray-600">
          اختر وجبتك، الإضافات، واكتب بيانات التوصيل وسيتم تأكيد الطلب على واتساب.
        </p>
      </header>

      {/* نوع الطلب */}
      <div className="flex gap-3 text-sm">
        <button
          type="button"
          onClick={() => setData((d) => ({ ...d, activeTab: "regular" }))}
          className={`flex-1 py-2 rounded-full border ${
            data.activeTab === "regular"
              ? "bg-primary text-black border-transparent shadow-md"
              : "bg-gray-100 text-gray-700 border-gray-200"
          }`}
        >
          طلب عادي
        </button>
        <button
          type="button"
          onClick={() => setData((d) => ({ ...d, activeTab: "catering" }))}
          className={`flex-1 py-2 rounded-full border ${
            data.activeTab === "catering"
              ? "bg-primary text-black border-transparent shadow-md"
              : "bg-gray-100 text-gray-700 border-gray-200"
          }`}
        >
          طلب عزومة
        </button>
      </div>

      {/* طلب عادي */}
      {data.activeTab === "regular" && (
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-[2fr,1fr] items-center">
            <div>
              <label className="block text-sm font-medium mb-1">الوجبة</label>
              <select
                className="w-full rounded-2xl border border-gray-200 px-3 py-2 text-sm bg-gray-50"
                value={data.mealName}
                onChange={(e) =>
                  setData((d) => ({
                    ...d,
                    mealName: e.target.value,
                  }))
                }
              >
                {Object.keys(MEAL_PRICES).map((meal) => (
                  <option key={meal} value={meal}>
                    {meal}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                عدد الوجبات
              </label>
              <select
                className="w-full rounded-2xl border border-gray-200 px-3 py-2 text-sm bg-gray-50"
                value={data.mealQuantity}
                onChange={(e) =>
                  setData((d) => ({
                    ...d,
                    mealQuantity: Number(e.target.value),
                  }))
                }
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* الإضافات */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold">الإضافات</h2>
            <div className="space-y-2">
              {ADDONS.map((addon) => (
                <div
                  key={addon.id}
                  className="flex items-center justify-between gap-3 px-3 py-2 rounded-2xl border border-gray-200 bg-gray-50"
                >
                  <span className="text-sm text-gray-800">
                    {addon.name} - {addon.price} جنيه
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-lg"
                      onClick={() => handleAddonChange(addon.id, -1)}
                    >
                      –
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">
                      {data.addonQuantities[addon.id]}
                    </span>
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full bg-primary shadow flex items-center justify-center text-lg"
                      onClick={() => handleAddonChange(addon.id, +1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* عزومة */}
      {data.activeTab === "catering" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              عدد الأشخاص
            </label>
            <input
              type="number"
              min={5}
              className="w-full rounded-2xl border border-gray-200 px-3 py-2 text-sm bg-gray-50"
              value={data.catering.people}
              onChange={(e) =>
                setData((d) => ({
                  ...d,
                  catering: { ...d.catering, people: e.target.value },
                }))
              }
            />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1">
                التاريخ
              </label>
              <input
                type="date"
                className="w-full rounded-2xl border border-gray-200 px-3 py-2 text-sm bg-gray-50"
                value={data.catering.date}
                onChange={(e) =>
                  setData((d) => ({
                    ...d,
                    catering: { ...d.catering, date: e.target.value },
                  }))
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                الساعة
              </label>
              <input
                type="time"
                className="w-full rounded-2xl border border-gray-200 px-3 py-2 text-sm bg-gray-50"
                value={data.catering.time}
                onChange={(e) =>
                  setData((d) => ({
                    ...d,
                    catering: { ...d.catering, time: e.target.value },
                  }))
                }
              />
            </div>
          </div>
        </div>
      )}

      {/* بيانات التوصيل */}
      <div className="space-y-3">
        <h2 className="text-sm font-semibold">بيانات التوصيل</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <input
            className="rounded-2xl border border-gray-200 px-3 py-2 text-sm bg-gray-50"
            placeholder="الاسم"
            value={data.name}
            onChange={(e) =>
              setData((d) => ({ ...d, name: e.target.value }))
            }
          />
          <input
            className="rounded-2xl border border-gray-200 px-3 py-2 text-sm bg-gray-50"
            placeholder="رقم الموبايل"
            value={data.mobile}
            onChange={(e) =>
              setData((d) => ({ ...d, mobile: e.target.value }))
            }
          />
        </div>
        <input
          className="rounded-2xl border border-gray-200 px-3 py-2 text-sm bg-gray-50 w-full"
          placeholder="العنوان بالتفصيل"
          value={data.address}
          onChange={(e) =>
            setData((d) => ({ ...d, address: e.target.value }))
          }
        />
        <textarea
          className="rounded-2xl border border-gray-200 px-3 py-2 text-sm bg-gray-50 w-full min-h-[80px]"
          placeholder="ملاحظات (اختياري)"
          value={data.notes}
          onChange={(e) =>
            setData((d) => ({ ...d, notes: e.target.value }))
          }
        />
      </div>

      {/* الإجمالي + زر واتساب */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="text-sm text-gray-700">
          <span className="font-semibold">الإجمالي بدون توصيل:</span>{" "}
          <span className="font-bold">{totalPrice} جنيه</span>
        </div>
        <button
          type="button"
          onClick={submit}
          className="w-full md:w-auto px-6 py-3 rounded-full bg-primary text-black font-semibold shadow-lg hover:scale-[1.03] transition"
        >
          أكد الطلب على واتساب 💬
        </button>
      </div>
    </div>
  );
}
