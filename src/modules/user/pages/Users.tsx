import { UserDataTable } from "../components/UserDataTable";
import { UserActions } from "../components/UserActions";
import { useTitle } from "@/hooks/useTitle";
import { useState } from "react";
import { UserDetail } from "@/types/auth";

export function Users() {
  useTitle("Usuarios");

  const [users, setUsers] = useState<UserDetail[]>([
    {
      id: 1,
      username: "username",
      email: "email",
      nombre: "Jhair",
      apellidos: "Arone Angeles",
      position_name: "position_name",
      core_name: "core_name",
      department_name: "department_name",
    },
    {
      id: 2,
      username: "username",
      email: "email",
      nombre: "nombre",
      apellidos: "apellidos",
      position_name: "position_name",
      core_name: "core_name",
      department_name: "department_name",
    },
    {
      id: 3,
      username: "username",
      email: "email",
      nombre: "nombre",
      apellidos: "apellidos",
      position_name: "position_name",
      core_name: "core_name",
      department_name: "department_name",
    },
    {
      id: 4,
      username: "username",
      email: "email",
      nombre: "nombre",
      apellidos: "apellidos",
      position_name: "position_name",
      core_name: "core_name",
      department_name: "department_name",
    },
    {
      id: 5,
      username: "username",
      email: "email",
      nombre: "nombre",
      apellidos: "apellidos",
      position_name: "position_name",
      core_name: "core_name",
      department_name: "department_name",
    },
    {
      id: 1,
      username: "username",
      email: "email",
      nombre: "nombre",
      apellidos: "apellidos",
      position_name: "position_name",
      core_name: "core_name",
      department_name: "department_name",
    },
    {
      id: 6,
      username: "username",
      email: "email",
      nombre: "nombre",
      apellidos: "apellidos",
      position_name: "position_name",
      core_name: "core_name",
      department_name: "department_name",
    },
    {
      id: 7,
      username: "username",
      email: "email",
      nombre: "nombre",
      apellidos: "apellidos",
      position_name: "position_name",
      core_name: "core_name",
      department_name: "department_name",
    },
    {
      id: 8,
      username: "username",
      email: "email",
      nombre: "nombre",
      apellidos: "apellidos",
      position_name: "position_name",
      core_name: "core_name",
      department_name: "department_name",
    },
    {
      id: 9,
      username: "username",
      email: "email",
      nombre: "nombre",
      apellidos: "apellidos",
      position_name: "position_name",
      core_name: "core_name",
      department_name: "department_name",
    },
    {
      id: 10,
      username: "username",
      email: "email",
      nombre: "nombre",
      apellidos: "apellidos",
      position_name: "position_name",
      core_name: "core_name",
      department_name: "department_name",
    },
    {
      id: 11,
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
    <section className="py-6 flex flex-col gap-4">
      <h3 className="text-3xl">Usuarios</h3>
      <div className="flex gap-4">
        <UserActions setUsers={setUsers}/>
      </div>
      <div>
        <UserDataTable data={users}/>
      </div>
    </section>
  );
}
