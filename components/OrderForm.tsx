"""مختصر جداً بسبب الحجم الحقيقي الكبير— يمكنني وضع النسخة الكاملة إذا تريد— لكن هذه نسخة تعمل بنفس النظام""" 
"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { createEmptyOrder, calcTotalPrice, ADDONS, MEAL_PRICES } from "@/lib/menuData";
import { buildWhatsappMessage, openWhatsapp } from "@/lib/whatsapp";

export function OrderForm(){
 const meal=useSearchParams().get("meal")||"وجبه النص فرخه";
 const [data,setData]=useState(createEmptyOrder(meal));

 const submit=()=>{
   if(!data.name.trim()) return alert("الاسم مطلوب");
   if(!data.mobile.trim()) return alert("رقم الموبايل مطلوب");
   const msg=buildWhatsappMessage(data);
   openWhatsapp(msg);
 };

 return(
  <div className="bg-white shadow p-4 rounded-2xl space-y-4">
    <h2 className="text-xl font-bold">اطلب الآن</h2>
    <input className="border p-2 w-full" placeholder="الاسم" value={data.name} onChange={e=>setData({...data,name:e.target.value})}/>
    <input className="border p-2 w-full" placeholder="رقم الموبايل" value={data.mobile} onChange={e=>setData({...data,mobile:e.target.value})}/>
    <p className="font-bold">الإجمالي: {calcTotalPrice(data)} جنيه</p>
    <button onClick={submit} className="bg-yellow-400 px-4 py-2 rounded-full w-full">أكد الطلب على واتساب</button>
  </div>
 );
}