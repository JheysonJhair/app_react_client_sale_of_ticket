import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";
const invalidNumberErrorMsg = "Debe ser un número válido";

export const ProductSchema = z.object({
    NameProduct: z.string().min(1, requiredErrorMsg),
    Price: z.string()
        .min(1, requiredErrorMsg)
        .refine((value) => !isNaN(Number(value)), { message: invalidNumberErrorMsg })
});
