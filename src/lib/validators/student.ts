import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";
const emailErrorMsg = "Debe ser un correo electrónico válido";

export const StudentSchema = z.object({
    Name: z.string().min(1, requiredErrorMsg),
    LastName: z.string().min(1, requiredErrorMsg),
    Code: z.string().min(1, "Ingrese al menos un apellido"),
    Dni: z.string().min(1, "Ingrese al menos un apellido"),
    Address: z.string().min(1, "Ingrese al menos un apellido"),
    Phone: z.string().min(1, "Ingrese al menos un apellido"),
    Genus: z.number().min(1, "Ingrese al menos un apellido"),
});