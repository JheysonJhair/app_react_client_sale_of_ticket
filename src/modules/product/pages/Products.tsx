import { ProductDataTable } from "../components/ProductDataTable";
import { ProductActions } from "../components/ProductActions";
import { useTitle } from "@/hooks/useTitle";
import { useState } from "react";
import { UserDetail } from "@/types/auth";

export function Products() {
  useTitle("Productos");

  const [users, setUsers] = useState<UserDetail[]>([
    {
      id: 1,
      username: "username",
      email: "email",
      nombre: "nombre",
      apellidos: "apellidos",
      position_name: "position_name",
      core_name: "core_name",
      department_name: "department_name",
    }
  ]);

  return (
    <section className="py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Productos</h3>
      <div className="flex gap-4">
        <ProductActions setUsers={setUsers}/>
      </div>
      <div>
        <ProductDataTable data={users}/>
      </div>
    </section>
  );
}
