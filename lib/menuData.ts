export const MEAL_PRICES = {
  "وجبه النص فرخه": 222,
  "وجبه الفرخه الكامله": 444,
} as const;

// نوع الإضافات (حتى لو مافي إضافات)
export type AddonId =
  | "rice_pudding"
  | "daqoos"
  | "honey"
  | "yogurt"
  | "small_water"
  | "large_water";

// قائمة الإضافات — تقدر تخليها فاضية ولكن النوع لازم يبقى موجود
export const ADDONS: { id: AddonId; name: string; price: number }[] = [
  // لو مش عايز إضافات حالياً، خليه فاضي كده:
  // { id: "rice_pudding", name: "رز بلبن", price: 15 },
];

// هيكل البيانات
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

// إنشاء طلب جديد
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