import { StudentDataTable } from "../components/StudentDataTable";
import { StudentActions } from "../components/StudentActions";
import { useTitle } from "@/hooks/useTitle";
import { useState } from "react";
import { Student } from "@/types/student";

export function Students() {
  useTitle("Estudiantes");

  const [students, setStudents] = useState<Student[]>([
    {
      idStudent:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      idUser: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      idSchool: "Sistemas",
      idCondition:
        "Ingenieria",
      StateStudent: true,
      Name: "Jheyson Jhair",
      LastName: "Arone Angeles",
      Code: "201054",
      Dni: "76767676",
      Address: "av perú",
      Phone: "989786789",
      Genus: 1,
    },
    {
      idStudent: "dfghtyuijgfhgtfgthyujikolrreftgw",
      idUser: "dfghtyuijgfhgtfgthyujikolrreftgw",
      idSchool: "Ingenieria Civil",
      idCondition: "Ingenieria",
      StateStudent: true,
      Name: "Shayli",
      LastName: "Arone Angeles",
      Code: "201020",
      Dni: "71717171",
      Address: "av perú",
      Phone: "989786789",
      Genus: 2,
    },
    {
      idStudent: "dfghtyuijgfhgtfgthyujikolrreftgw",
      idUser: "dfghtyuijgfhgtfgthyujikolrreftgw",
      idSchool: "Ciencias politicas",
      idCondition: "Ciencias",
      StateStudent: true,
      Name: "Rodrigo",
      LastName: "Espinoza Sayago",
      Code: "201212",
      Dni: "76767676",
      Address: "av perú",
      Phone: "988976789",
      Genus: 1,
    },
  ]);

  return (
    <section className="py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Estudiantes</h3>
      <div className="flex gap-4">
        <StudentActions setStudents={setStudents} />
      </div>
      <div>
        <StudentDataTable data={students} />
      </div>
    </section>
  );
}
