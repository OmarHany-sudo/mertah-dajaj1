"use client";

export const dynamic = "force-dynamic";

import { Navbar } from "@/components/Navbar";
import { OrderForm } from "@/components/OrderForm";

export default function OrderPage() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto pb-10">
      <Navbar />
      <main className="px-4 md:px-8 pb-8">
        <OrderForm />
      </main>
    </div>
  );
}