import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";
const invalidNumberErrorMsg = "Debe ser un número válido";
const invalidLengthErrorMsg = "Debe tener una longitud válida";

export const StudentSchema = z.object({
    Name: z.string().min(1, requiredErrorMsg),
    LastName: z.string().min(1, requiredErrorMsg),
    Code: z.string()
        .min(6, invalidLengthErrorMsg)
        .refine((value) => /^\d+$/.test(value), { message: invalidNumberErrorMsg }),
    Dni: z.string()
        .min(8, invalidLengthErrorMsg)
        .refine((value) => /^\d+$/.test(value), { message: invalidNumberErrorMsg }),
    Address: z.string().min(1, requiredErrorMsg),
    Phone: z.string()
        .min(9, invalidLengthErrorMsg)
        .refine((value) => /^\d+$/.test(value), { message: invalidNumberErrorMsg }),
    Genus: z.number().min(1, requiredErrorMsg),
});
