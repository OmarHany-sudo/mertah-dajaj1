import Link from "next/link";
import { MEAL_PRICES } from "@/lib/menuData";

export function MealCard({name,description}:{name:string;description:string;}){
 const price=MEAL_PRICES[name]||0;
 return(
  <article className="bg-white shadow p-4 rounded-2xl">
    <h3 className="font-bold text-lg mb-2">{name}</h3>
    <p className="text-gray-600">{description}</p>
    <p className="mt-2 font-bold">{price} جنيه</p>
    <Link href={"/order?meal="+encodeURIComponent(name)} className="inline-block bg-yellow-400 mt-3 px-4 py-2 rounded-full">اطلب الآن</Link>
  </article>
 );
}