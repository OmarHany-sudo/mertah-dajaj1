// lib/menuData.ts

// أسعار الوجبات الأساسية
export const MEAL_PRICES = {
  "وجبه النص فرخه": 222,
  "وجبه الفرخه الكامله": 444,
} as const;

// تعريف الوجبة لصفحات الـ UI
export type MealId = "half-chicken" | "full-chicken";

export interface Meal {
  id: MealId;
  name: string;
  description: string;
  price: number;
  badge?: string;
}

// نفس الوجبات لكن بشكل Structured للـ UI
export const MEALS: Meal[] = [
  {
    id: "half-chicken",
    name: "وجبه النص فرخه",
    description: "نص فرخة مشوية + أرز",
    price: MEAL_PRICES["وجبه النص فرخه"],
    badge: "الأكثر طلبًا",
  },
  {
    id: "full-chicken",
    name: "وجبه الفرخه الكامله",
    description: "فرخة كاملة مشوية + أرز",
    price: MEAL_PRICES["وجبه الفرخه الكامله"],
  },
];

export function getMealById(id: string): Meal | undefined {
  return MEALS.find((m) => m.id === id);
}

// ---- الإضافات (لسه فاضية لو حابب تزود بعدين) ----

export type AddonId =
  | "rice_pudding"
  | "daqoos"
  | "honey"
  | "yogurt"
  | "small_water"
  | "large_water";

export const ADDONS: { id: AddonId; name: string; price: number }[] = [
  // مثال لو حبيت تضيف بعدين:
  // { id: "rice_pudding", name: "رز بلبن", price: 25 },
];

export interface OrderFormData {
  mealName: string;
  mealQuantity: number;
  name: string;
  mobile: string;
  address: string;
  notes: string;
  catering: {
    people: string;
    date: string;
    time: string;
  };
  activeTab: "regular" | "catering";
  addonQuantities: Record<AddonId, number>;
}

// إنشاء نموذج طلب فاضي
export function createEmptyOrder(mealName: string): OrderFormData {
  const addonQuantities: Record<AddonId, number> = {
    rice_pudding: 0,
    daqoos: 0,
    honey: 0,
    yogurt: 0,
    small_water: 0,
    large_water: 0,
  };

  return {
    mealName,
    mealQuantity: 1,
    name: "",
    mobile: "",
    address: "",
    notes: "",
    catering: { people: "", date: "", time: "" },
    activeTab: "regular",
    addonQuantities,
  };
}

// حساب السعر
export function calcTotalPrice(data: OrderFormData): number {
  const key = data.mealName as keyof typeof MEAL_PRICES;
  const mealsTotal = data.mealQuantity * (MEAL_PRICES[key] ?? 0);
  return mealsTotal;
}