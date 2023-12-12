import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductSchema } from "@/lib/validators/product";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { InputPassword } from "@/components/InputPassword";
import { z } from "zod";
import { FormCombobox } from "@/components/FormCombobox";
import { Product } from "@/types/product";

interface Props {
  setIsPending: (value: boolean) => void;
  setProducts: (products: Product[]) => void;
  setIsOpen: (value: boolean) => void;
}

export function ProductForm({ setIsPending, setProducts, setIsOpen }: Props) {
  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      NameProduct: "",
      Price: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ProductSchema>) => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      console.log(values)
      setProducts([
        {
          ...values,
          idProduct: "asdsasdfs", 
          idAdministrator: "test", 
          Active: true, 
          NameProduct:"",
          Price:21
        },
      ]);
      setIsOpen(false);
    }, 2000);
  };

  return (
    <Form {...form}>
      <form
        id="add-user-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full"
      >
        <div className="flex justify-between gap-4">
          <FormField
            control={form.control}
            name="NameProduct"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Producto</FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese un producto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese un precio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
      </form>
    </Form>
  );
}
