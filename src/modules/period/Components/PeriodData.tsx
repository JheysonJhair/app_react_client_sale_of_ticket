import { Bill } from "@/types/bill";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import accounting from "accounting";
import { Edit, Trash2 } from "lucide-react";
import ModalDelete from "./ModalDelete";
import { useState } from "react";

interface Props {
  facturas: Bill[];
}

export function PeriodData({ facturas }: Props) {
  const [modal, setModal] = useState(false);
  const [facturaToDelete, setFacturaToDelete] = useState<Bill | null>(null);

  const formatCurrency = (amount: number, currency: string) => {
    const formattedAmount = accounting.formatMoney(amount, {
      symbol: currency === "dolares" ? "$" : "S/.",
      format: "%s%v",
      precision: 2,
    });

    return formattedAmount;
  };

  const handleEdit = (index: number) => {
  };

  const handleDelete = (index: number) => {
    setFacturaToDelete(facturas[index]);
    setModal(true);
  };

  const closeModal = () => {
    setFacturaToDelete(null);
    setModal(false);
  };

  const handleEliminarFactura = (factura: Bill) => {
    console.log("Eliminando factura:", factura);
     const updatedFacturas = facturas.filter((f) => f.numero !== factura.numero);
  };

  return (
    <div>
      <Table className="border-2 black shadow-md">
        <TableCaption>Aperura asignada para el año 2023</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">SEMESTRE</TableHead>
            <TableHead className="font-bold">FECHA</TableHead>
            <TableHead className="font-bold">CANTIDAD DE CUPOS</TableHead>
            <TableHead className="font-bold">ESTADO</TableHead>
            <TableHead className="font-bold">ACCIONES</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {facturas.map((factura, index) => (
            <TableRow key={index}>
              <TableCell>{factura.razSocial}</TableCell>  
              <TableCell>{factura.fechaEmision}</TableCell>
              <TableCell>{factura.serie}</TableCell>
              <TableCell
                style={{
                  color: factura.estado === "PAGADO" ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {factura.estado}
              </TableCell>
              <TableCell className="flex justify-around">
                <button
                  onClick={() => handleEdit(index)}
                >
                  <Edit className="w-5/6" />
                </button>
                <button
                  onClick={() => handleDelete(index)}
                >
                  <Trash2 className="w-5/6" />
                </button>
              </TableCell>
              {modal && facturaToDelete && (
                 <ModalDelete
                 factura={facturaToDelete}
                 onClose={closeModal}
                 onDelete={handleEliminarFactura}
               />
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
