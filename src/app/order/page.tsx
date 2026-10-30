"use client";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { ProductCard } from "../../../components/ProductCard";
import { useState } from "react";
import { CategoryStatus } from "../../../types/category";
import { OrderNavigationBar } from "../../../components/OrderNavigationBar";

export default function Order() {
  const [categoryStatus, setCategoryStatus] = useState<CategoryStatus>("food");

  return (
    <>
      {/* Sets screen to take up the whole screen */}
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="min-h-[calc(100dvh-68px)] flex-1">
          <OrderNavigationBar
            categoryStatus={categoryStatus}
            setCategoryStatus={setCategoryStatus}
          />
          <ProductCard categoryStatus={categoryStatus} />
        </main>
        <Footer />
      </div>
    </>
  );
}
