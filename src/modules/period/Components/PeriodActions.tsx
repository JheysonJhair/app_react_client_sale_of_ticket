import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PlusCircle } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faFolderClosed} from '@fortawesome/free-solid-svg-icons';
import PDFExportButton from "./ExportTable.tsx";
import { useEffect, useState } from "react";
import { Bill } from "@/types/bill";
import NewPeriod from "./ModalNewPeriod.tsx";
import { INITIAL_STATE } from "../pages/period.tsx";

interface Props {
    factura: Bill;
    setFactura: (factura: Bill) => void;
    facturas: Bill[];
    setFacturas: (facturas: Bill[]) => void;
}

export function PeriodActions({ factura, setFactura,facturas,setFacturas }: Props) {
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState("");

  const handleOpenModal = () => {
    setModal(true);
  };

  const resetModalState = () => {
    setFactura(INITIAL_STATE);
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setModal(false);
    resetModalState();
    setAlert("");
  };

  const handleAddInvoice = () => {
    if (
      !factura.fechaEmision ||
      !factura.serie ||
      !factura.razSocial 
    ) {
      setAlert(
        "Por favor, llene todos los campos antes de agregar una factura"
      );
      return;
    }

    const nuevaFactura = {
      ...factura,
    };
    setFacturas([...facturas, nuevaFactura]);
    console.log("Facturas: ", facturas);
    handleCloseModal();
  };

  useEffect(() => {
    resetModalState();
  }, []);

  const handleMonedaChange = (value: string) => {
    setFactura({ ...factura, moneda: value });
  };

  const handleEstadoChange = (value: string) => {
    setFactura({ ...factura, estado: value });
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col p-12">
        <Label className="pb-5 text-xl">
          ¿Deceas activar la apertura para la venta de ticket?
        </Label>
        <div className="w-1/2 flex justify-center">
          <Button onClick={handleOpenModal} className="p-5 mr-5 shadow-lg">
          <FontAwesomeIcon icon={faFolderOpen} size="xl" style={{ marginRight: '10px' }} /> Apertura

          </Button>
          <Button className="p-5 mr-5 shadow-lg">
          <FontAwesomeIcon icon={faFolderClosed} size="xl" style={{ marginRight: '10px' }} /> Cierre
          </Button>
          {/* <PDFExportButton data={facturas} /> */}
        </div>
      </div>
      <div>
        {modal && (
          <NewPeriod
            factura={factura}
            setFactura={setFactura}
            modal={modal}
            alert={alert}
            handleCloseModal={handleCloseModal}
            handleAddInvoice={handleAddInvoice}
            handleMonedaChange={handleMonedaChange}
            handleEstadoChange={handleEstadoChange}
          />
        )}
      </div>
    </>
  );
}
