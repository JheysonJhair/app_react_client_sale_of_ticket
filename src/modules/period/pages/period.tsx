import { useState } from "react";
import { Period } from "@/types/period";
import { PeriodSearch } from "../Components/PeriodSearch";
import { useTitle } from "@/hooks/useTitle";
import { PeriodData } from "../Components/PeriodData";
import { PeriodActions } from "../Components/PeriodActions";

export const INITIAL_STATE: Period = {
  idAdministrator:"",
  idPeriod:"",
  NameSemester: "",
  StartDate: "",
  EndDate: "",
  QuantityCoupon: "",
  Opening: "",
};

function Periodo() {
  useTitle("Apertura");
  const [period, setPeriod] = useState(INITIAL_STATE);
  const [periods, setPeriods] = useState<Period[]>([]);

  return (
    <>
      <PeriodActions
        period={period}
        setPeriod={setPeriod}
        periods={periods}
        setPeriods={setPeriods}
      />
      <PeriodSearch />
       <PeriodData periods={periods} /> 
    </>
  );
}

export default Periodo;
