"use client";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { ProductCard } from "../../../components/ProductCard";
import { useState } from "react";
import { CategoryStatus } from "../../../types/category";
import { OrderNavigationBar } from "../../../components/OrderNavigationBar";
import Image from "next/image";
import Link from "next/link";

export default function CheckOutPage() {
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

          {/* Main content */}
          <div className="flex flex-col gap-10 items-center mt-10">
            <div className="ml-10 mr-10 rounded-xl bg-white">
              <table className="text-xl text-left">
                <thead>
                  <tr>
                    <th scope="col" className="px-5 py-5">
                      Item
                    </th>
                    <th scope="col" className="px-5 py-5">
                      Quantity
                    </th>
                    <th scope="col" className="px-5 py-5">
                      Price
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="px-5 py-5">
                      Vanilla Bean Sweet Cream Cold-Brew
                    </td>
                    <td className="px-5 py-5 text-center">2x</td>
                    <td className="px-5 py-5">300.00</td>
                  </tr>
                </tbody>

                <tfoot>
                  <tr>
                    <td
                      colSpan={2}
                      scope="col"
                      className="px-5 py-5 border-t border-t-black"
                    >
                      Total Amount:
                    </td>
                    <td className="px-5 py-5 border-t border-t-black">
                      300.00
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="flex flex-col gap-2 rounded-xl bg-white p-5 w-85 sm:w-162">
              <p className="text-xl font-bold">Your details</p>
              <label htmlFor="customer-name" className="cursor-pointer">
                Full name
              </label>
              <input
                id="customer-name"
                type="text"
                placeholder="e.g. John Doe"
                required
                className="w-full border border-black rounded-md px-5 py-1"
              ></input>

              <label htmlFor="customer-number" className="cursor-pointer">
                Mobile number
              </label>
              <input
                id="customer-number"
                type="tel"
                pattern="09[0-9]{9}" // Validates exactly 11 digits starting with "09"
                maxLength={11}
                placeholder="09XXXXXXXXX"
                className="w-full border border-black rounded-md px-5 py-1"
              ></input>

              <label htmlFor="customer-note" className="cursor-pointer">
                Note
              </label>
              <input
                id="customer-note"
                type="text"
                placeholder="e.g. Less sugar, extra spoon"
                className="w-full border border-black rounded-md px-5 py-1"
              ></input>
            </div>

            <div className="flex flex-col gap-2 rounded-xl bg-white p-5 sm:w-fit ml-5 mr-5">
              <p className="text-xl font-bold">Pay via Gcash</p>
              <Image src="/images/gcash_sample_image.webp" alt="Gcash Preview Image" height={700} width={700} className="w-100 h-100 rounded-xl"/>
            </div>

            <div>Upload Screenshot here</div>

            <button type="submit" className="bg-[#724816] px-8 py-4 rounded-xl text-white font-bold text-xl lg:px-16 hover:bg-[#A8783E] transition-colors duration-300 ease-in-out cursor-pointer">
              Confirm
            </button>

            <Link href="/menu" className="mb-10">Edit items</Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
