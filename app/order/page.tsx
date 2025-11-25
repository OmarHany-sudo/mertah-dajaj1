import { Navbar } from "@/components/Navbar";
import { OrderForm } from "@/components/OrderForm";

export default function OrderPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <Navbar />
      <OrderForm />
    </div>
  );
}