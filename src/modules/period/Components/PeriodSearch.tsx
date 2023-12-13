import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PeriodSearch({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });

  const [cantidad, setCantidad] = React.useState<string | undefined>(undefined);

  const handleAgregarClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleAgregarClick}>
      <div className="flex justify-center flex-col p-10 pl-20 pr-20 b-20 ml-0 mb-20 mr-0 bg-[#CCCED7] dark:bg-muted">
        <Label className="flex justify-left mb-10 text-xl ml-10">
          Ingrese la apertura para el año 2023  
        </Label>
        <div className="flex flex-row justify-around items-center w-full">
          <div className="flex flex-col w-1/6">
            <Label className="mb-2">Razon social</Label>
            <Input
              placeholder="Escribe el monto"
              type="text"
              onChange={(e) => setCantidad(e.target.value)}
            />
            {/* <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecciona ciclo" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">SEMESTRE 23-I</SelectItem>
                <SelectItem value="2">SEMESTRE 23-II</SelectItem>
                <SelectItem value="3">SEMESTRE 23-II</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select> */}
          </div>
          <div className="flex flex-col">
            <Label className="mb-2">Fecha</Label>
            <div className={cn("grid gap-2", className)}>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                      "w-[300px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "LLL dd, y")} -{" "}
                          {format(date.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(date.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          
          <div className="flex flex-col w-1/6">
            <Label className="mb-2">Serie</Label>
            <Input
              placeholder="Escribe el monto"
              type="number"
              onChange={(e) => setCantidad(e.target.value)}
            />
          </div> 
          <div className="flex flex-col w-1/8 mt-5">
            <Button type="submit">
              <FontAwesomeIcon icon={faCirclePlus} size="xl" style={{ marginRight: '10px' }} /> Agregar
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
