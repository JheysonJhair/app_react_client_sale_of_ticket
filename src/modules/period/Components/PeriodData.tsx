import { Period } from "@/types/period";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash2 } from "lucide-react";

interface Props {
  periods: Period[];
}

export function PeriodData({ periods }: Props) {

  const handleEdit = (index: number) => {
    console.log("Periodo a editar:", periods[index]);
  };

  const handleDelete = (index: number) => {
    console.log("Periodo a eliminar:", periods[index]);
  };

  const datosEjemplo = [
    {
      NameSemester: "SEMESTRE 23-I",
      StartDate: "2023-10-12",
      EndDate: "2023-12-12",
      estado: "ACTIVO",
      QuantityCoupon:"20",
      Opening:"ACTIVO"
    },
  ];

  const periodosCombinadas = [...periods, ...datosEjemplo];

  return (
    <div>
      <Table className="border-2 black shadow-md">
        <TableCaption>Apertura asignada para el año 2023</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">SEMESTRE</TableHead>
            <TableHead className="font-bold">FECHA INICO</TableHead>
            <TableHead className="font-bold">FECHA FIN</TableHead>
            <TableHead className="font-bold">CANTIDAD</TableHead>
            <TableHead className="font-bold">ESTADO</TableHead>
            <TableHead className="font-bold">ACCIONES</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {periodosCombinadas.map((period, index) => (
            <TableRow key={index}>
              <TableCell>{period.NameSemester}</TableCell>
              <TableCell>{period.StartDate}</TableCell>
              <TableCell>{period.EndDate}</TableCell>
              <TableCell>{period.QuantityCoupon}</TableCell>
              <TableCell
                style={{
                  color: period.Opening == "ACTIVO" ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {period.Opening}
              </TableCell>
              <TableCell className="flex justify-around">
                <button onClick={() => handleEdit(index)}>
                  <Edit className="w-5/6" />
                </button>
                <button onClick={() => handleDelete(index)}>
                  <Trash2 className="w-5/6" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
