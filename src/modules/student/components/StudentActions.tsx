import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { StudentForm } from "./StudentForm";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Student } from "@/types/student";

interface Props {
  setStudents: (users: Student[]) => void;
}

export function StudentActions({ setStudents }: Props) {
  const [isPending, setIsPending] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Crear Estudiante</Button>
      </DialogTrigger>
      <DialogContent className="gap-8">
        <DialogHeader>
          <DialogTitle>Nuevo Estudiante</DialogTitle>
          <DialogDescription>
            En este formulario puedes crear un nuevo Estudiante
          </DialogDescription>
        </DialogHeader>
        <StudentForm setIsPending={setIsPending} setStudents={setStudents} setIsOpen={setIsOpen}/>
        <DialogFooter className="flex sm:justify-between gap-4">
          <DialogClose asChild>
            <Button className="w-full" variant="outline">
              Cerrar
            </Button>
          </DialogClose>
          <Button
            className="w-full"
            disabled={isPending}
            type="submit"
            form="add-user-form"
          >
            {isPending && (
              <Loader2
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Guardar
            <span className="sr-only">
              Guardar nuevo estudiante
            </span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
