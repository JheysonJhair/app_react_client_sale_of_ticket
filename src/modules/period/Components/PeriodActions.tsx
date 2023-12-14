import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faFolderClosed} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { Period } from "@/types/period";
import { INITIAL_STATE } from "../pages/period.tsx";

interface Props {
    period: Period;
    setPeriod: (period: Period) => void;
    periods: Period[];
    setPeriods: (facturas: Period[]) => void;
}

export function PeriodActions({ period, setPeriod,periods,setPeriods }: Props) {
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState("");

  const handleOpenModal = () => {
    setModal(true);
  };

  const resetModalState = () => {
    setPeriod(INITIAL_STATE);
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setModal(false);
    resetModalState();
    setAlert("");
  };

  const handleAddInvoice = () => {
    if (
      !period.NameSemester ||
      !period.EndDate ||
      !period.StartDate ||
      !period.QuantityCoupon 
    ) {
      setAlert(
        "Por favor, llene todos los campos antes de agregar una period"
      );
      return;
    }

    const nuevoPeriodo = {
      ...period,
    };
    setPeriods([...periods, nuevoPeriodo]);
    console.log("Facturas: ", periods);
    handleCloseModal();
  };

  useEffect(() => {
    resetModalState();
  }, []);


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
        </div>
      </div>
      <div>
      </div>
    </>
  );
}
