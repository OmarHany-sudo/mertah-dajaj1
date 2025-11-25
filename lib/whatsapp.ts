export function openWhatsapp(msg:string){
 const phone="201030380101";
 const url=`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(msg)}`;
 window.open(url,"_blank");
}

export function buildWhatsappMessage(data:any){
 return `*طلب جديد*\nالاسم: ${data.name}\nالموبايل: ${data.mobile}\nالوجبة: ${data.mealName}`;
}