export const MEAL_PRICES={
 "وجبه النص فرخه":222,
 "وجبه الفرخه الكامله":444
};

export const ADDONS=[];

export function createEmptyOrder(mealName:string){
 return{
  mealName,
  mealQuantity:1,
  name:"",
  mobile:"",
  address:"",
  notes:"",
  catering:{people:"",date:"",time:""},
  activeTab:"regular" as const,
  addonQuantities:{}
 };
}

export function calcTotalPrice(data:any){
 return data.mealQuantity*(MEAL_PRICES[data.mealName]||0);
}