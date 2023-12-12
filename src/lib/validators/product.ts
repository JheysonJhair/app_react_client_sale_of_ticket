import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";
const emailErrorMsg = "Debe ser un correo electrónico válido";

export const ProductSchema = z.object({
    NameProduct: z.string().min(1, requiredErrorMsg),
    Price: z.string().min(1, "Ingrese al menos un apellido"),
});