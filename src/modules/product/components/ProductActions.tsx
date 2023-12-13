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
import { ProductForm } from "./ProductForm";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Product } from "@/types/product";

interface Props {
  setProducts: (products: Product[]) => void;
}

export function ProductActions({ setProducts }: Props) {
  const [isPending, setIsPending] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Registrar producto</Button>
      </DialogTrigger>
      <DialogContent className="gap-8">
        <DialogHeader>
          <DialogTitle>Nuevo Producto</DialogTitle>
          <DialogDescription>
            En este formulario puedes registrar un nuevo producto.
          </DialogDescription>
        </DialogHeader>
        <ProductForm setIsPending={setIsPending} setProducts={setProducts} setIsOpen={setIsOpen}/>
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
              Guardar nuevo producto
            </span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
