import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StudentSchema } from "@/lib/validators/student";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { FormCombobox } from "@/components/FormCombobox";
import { Student } from "@/types/student";


const sexo = [
  {
    label: "Masculino",
    value: 1,
  },
  {
    label: "Femenino",
    value: 2,
  },
  {
    label: "Prefiero no decirlo",
    value: 3,
  },
];

interface Props {
  setIsPending: (value: boolean) => void;
  setStudents: (students: Student[]) => void;
  setIsOpen: (value: boolean) => void;
}

export function StudentForm({ setIsPending, setStudents, setIsOpen }: Props) {
  const form = useForm<z.infer<typeof StudentSchema>>({
    resolver: zodResolver(StudentSchema),
    defaultValues: {
      Name: "",
      LastName: "",
      Code: "",
      Dni: "",
      Address: "",
      Phone: "",
      Genus: 1,
    },
  });

  const onSubmit = (values: z.infer<typeof StudentSchema>) => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      console.log(values);
      setStudents([
        {
          ...values,
          idCondition: "",
          idSchool: "",
          idUser: "",
          idStudent: "",
          StateStudent: true,
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
            name="Name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nombres</FormLabel>
                <FormControl>
                  <Input placeholder="Nombres" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="LastName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Apellidos</FormLabel>
                <FormControl>
                  <Input placeholder="Apellidos" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="">
          <FormField
            control={form.control}
            name="Phone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+51 999 999 999"
                    {...field}
                    maxLength={9} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-between gap-4">
          <FormField
            control={form.control}
            name="Code"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Código</FormLabel>
                <FormControl>
                  <Input
                    placeholder="000000"
                    {...field}
                    maxLength={6} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Dni"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>DNI</FormLabel>
                <FormControl>
                  <Input
                    placeholder="00000000"
                    {...field}
                    maxLength={8} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <FormField
            name="school"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Facultad</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                >
                  <FormControl>
                    <SelectTrigger
                      className={`${
                        !field.value && "text-muted-foreground"
                      } hover:text-accent-foreground`}
                    >
                      <SelectValue placeholder="Seleccione una Facultad" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Ingeniería</SelectItem>
                    <SelectItem value="2">Administración</SelectItem>
                    <SelectItem value="3">
                      Educación y Ciencias Sociales
                    </SelectItem>
                    <SelectItem value="4">Medicina Veterinaria</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="school"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Escuela Profesional</FormLabel>
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                >
                  <FormControl>
                    <SelectTrigger
                      className={`${
                        !field.value && "text-muted-foreground"
                      } hover:text-accent-foreground`}
                    >
                      <SelectValue placeholder="Seleccione una Facultad" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Ingeniería Informática y Sistemas</SelectItem>
                    <SelectItem value="2">Ingeniería de Minas</SelectItem>
                    <SelectItem value="3">Ingeniería Civil</SelectItem>
                    <SelectItem value="4">Ingeniería Agroecológica </SelectItem>
                    <SelectItem value="5">
                    Administración de Empresas
                    </SelectItem>
                    <SelectItem value="6">Educación Inicial Intercultural Bilingüe</SelectItem>
                    <SelectItem value="7">Medicinad Veterinaria y Zootecnia</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="w-3/4">
            {" "}
            <FormField
              control={form.control}
              name="Address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dirección</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="123 Calle Principal, Ciudad, País"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="">
            {" "}
            <FormCombobox
              form={form}
              results={sexo}
              name="Genus"
              label="Género"
            />
          </div>
        </div>
      </form>
    </Form>
  );
}
