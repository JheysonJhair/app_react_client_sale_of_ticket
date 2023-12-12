import { StudentDataTable } from "../components/StudentDataTable";
import { StudentActions } from "../components/StudentActions";
import { useTitle } from "@/hooks/useTitle";
import { useState } from "react";
import { Student } from "@/types/student";

export function Students() {
  useTitle("Estudiantes");

  const [students, setStudents] = useState<Student[]>([
    {
      idStudent: "dfghtyuijgfhgtfgthyujikolrreftgw",
      idUser: "dfghtyuijgfhgtfgthyujikolrreftgw",
      idSchool: "dfghtyuijgfhgtfgthyujikolrreftgw",
      idCondition: "dfghtyuijgfhgtfgthyujikolrreftgw",
      StateStudent: true,
      Name: "Jhair",
      LastName: "Arone Angeles",
      Code: "201054",
      Dni: "76767676",
      Address: "av perú",
      Phone: "989786789",
      Genus: 1
    }
  ]);

  return (
    <section className="py-6 flex flex-col gap-8">
      <h3 className="text-3xl">Estudiantes</h3>
      <div className="flex gap-4">
        <StudentActions setStudents={setStudents}/>
      </div>
      <div>
        <StudentDataTable data={students}/>
      </div>
    </section>
  );
}
