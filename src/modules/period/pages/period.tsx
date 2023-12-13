import { useState } from "react";
import { Bill } from "@/types/bill";
import { PeriodSearch } from "../Components/PeriodSearch";
import { useTitle } from "@/hooks/useTitle";
import { PeriodData } from "../Components/PeriodData";
import { PeriodActions } from "../Components/PeriodActions";

export const INITIAL_STATE: Bill = {
  fechaEmision: "",
  serie: "",
  numero: "",
  ruc: "",
  razSocial: "",
  direccion: "",
  descripcion: "",
  monto: "",
  moneda: "soles",
  estado: "PAGADO",
};

function Period() {
  useTitle("Apertura");
  const [factura, setFactura] = useState(INITIAL_STATE);
  const [facturas, setFacturas] = useState<Bill[]>([]);

  return (
    <>
      <PeriodActions
        factura={factura}
        setFactura={setFactura}
        facturas={facturas}
        setFacturas={setFacturas}
      />
      <PeriodSearch />
       <PeriodData facturas={facturas} /> 
    </>
  );
}

export default Period;
