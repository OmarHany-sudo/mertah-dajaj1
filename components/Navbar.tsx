export function Navbar(){
 return(
  <header className="py-4 flex justify-between px-4">
   <span className="font-bold text-lg">مرتاح دجاج</span>
   <a href="/order" className="bg-yellow-400 px-4 py-2 rounded-full">اطلب الآن</a>
  </header>
 );
}