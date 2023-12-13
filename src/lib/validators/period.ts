import { z } from "zod";

const requiredErrorMsg = "Este campo no puede estar vacío";

export const PeriodSchema = z.object({
    NameSemester: z.string().min(1, { message: requiredErrorMsg }),
    StartDate: z.string().min(1, { message: requiredErrorMsg }),
    EndDate: z.string().min(1, { message: requiredErrorMsg }),
    QuantityCoupon: z.string().min(1, { message: 'La cantidad de cupones debe ser mayor o igual a 1' }),
});
