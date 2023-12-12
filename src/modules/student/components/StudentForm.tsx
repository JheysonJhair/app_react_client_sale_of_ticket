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

import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputPassword } from "@/components/InputPassword";
import { z } from "zod";
import { FormCombobox } from "@/components/FormCombobox";
import { Student } from "@/types/student";

const cores = [
  {
    label: "Sistema",
    value: 1,
  },
  {
    label: "Administración",
    value: 2,
  },
  {
    label: "Marketing",
    value: 3,
  },
];
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
    value: 2,
  },
];

const positions = [
  {
    label: "Lider de Sistemas",
    value: 1,
  },
  {
    label: "Backend Python",
    value: 2,
  },
  {
    label: "Frontend React",
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
          idCondition: "asaasas",
          idSchool: "asaasas",
          idUser: "asaasas",
          idStudent: "sadasd",
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
        <div className="flex justify-between gap-4">
          <FormField
            control={form.control}
            name="Code"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Codigo</FormLabel>
                <FormControl>
                  <Input placeholder="XXXXXX" {...field} />
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
                <FormLabel>Dni</FormLabel>
                <FormControl>
                  <Input placeholder="XXXXXXXX" {...field} />
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
                      <SelectValue placeholder="Seleccione una facultad" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Sistemas</SelectItem>
                    <SelectItem value="2">Administracion</SelectItem>
                    <SelectItem value="3">Veterinaria</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormCombobox
            form={form}
            results={cores}
            name="core_id"
            label="Carrera"
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="w-3/4">
            {" "}
            {/* Esto hará que el campo de dirección ocupe 3/4 del espacio */}
            <FormField
              control={form.control}
              name="Address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Direccion</FormLabel>
                  <FormControl>
                    <Input placeholder="AV/" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="">
            {" "}
            {/* Esto hará que el campo de género ocupe 1/4 del espacio */}
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
