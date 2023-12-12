import { ProductDataTable } from "../components/ProductDataTable";
import { ProductActions } from "../components/ProductActions";
import { useTitle } from "@/hooks/useTitle";
import { useState } from "react";
import { Product } from "@/types/product";

export function Products() {
  useTitle("Productos");

  const [products, setProducts] = useState<Product[]>([
    {
      idProduct:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      idAdministrator: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      NameProduct: "Almuerzo",
      Price: 10,
      Active: true
    },
    {
      idProduct:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      idAdministrator: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      NameProduct: "Desayuno",
      Price: 2,
      Active: true
    }
  ]);

  return (
    <section className="py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Productos</h3>
      <div className="flex gap-4">
        <ProductActions setProducts={setProducts}/>
      </div>
      <div>
        <ProductDataTable data={products}/>
      </div>
    </section>
  );
}
