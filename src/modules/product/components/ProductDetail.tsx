import { Button } from "@/components/ui/button";
import {
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
} from "@/components/ui/sheet";
import { Product } from "@/types/product";
import { Pencil, Trash } from "lucide-react";

interface Props {
  product: Product;
}

export function ProductDetail({ product }: Props) {
  return (
    <SheetContent>
      <SheetTitle>Información del producto</SheetTitle>
      <div className="pt-8">
        <div className="flex flex-col items-center gap-4">
          <img
            src="https://getup.com.pe/cdn/shop/files/Promo3diasAlmuerzo_Snack.webp?v=1698193550"
            alt="perfil"
            className="rounded-full w-48 h-48 2xl:w-60 2xl:h-60 flex-initial object-cover"
          />
          <p className="flex flex-col items-center">
            {product.NameProduct}
            <span className="text-muted-foreground">{product.Price}</span>
          </p>
        </div>
      </div>
      <SheetFooter>
        <Button type="button">
          <Pencil className="mr-2 h-4 w-4" aria-hidden="true" />
          Editar
        </Button>
        <Button type="button" variant="destructive">
          <Trash className="mr-2 h-4 w-4" aria-hidden="true" />
          Eliminar
        </Button>
      </SheetFooter>
    </SheetContent>
  );
}
