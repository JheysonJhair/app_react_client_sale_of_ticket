import { z } from "zod";

const formSchema = z.object({
    fechaEmision: z.string().min(2, {
      message: "Campo requerido",
    }),
    serie: z.string().min(2, {
      message: "Campo requerido",
    }).max(10, {
      message: "Limite superado",
    }),
    razSocial: z.string().min(2, {
      message: "Campo requerido",
    }).max(30, {
      message: "Limite superado",
    }),
  });
  
  export default formSchema;