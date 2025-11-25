export const MEAL_PRICES = {
  "وجبه النص فرخه": 222,
  "وجبه الفرخه الكامله": 444,
} as const;

export const ADDONS: any[] = [];

export function createEmptyOrder(mealName: string) {
  return {
    mealName,
    mealQuantity: 1,
    name: "",
    mobile: "",
    address: "",
    notes: "",
    catering: { people: "", date: "", time: "" },
    activeTab: "regular" as const,
    addonQuantities: {},
  };
}

export function calcTotalPrice(data: any) {
  const key = data.mealName as keyof typeof MEAL_PRICES;
  return data.mealQuantity * (MEAL_PRICES[key] ?? 0);
}
