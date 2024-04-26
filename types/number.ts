import { z } from "zod";

/**
 * NumberFormSchema is a Zod schema for form validation.
 * It ensures that the 'number' field is a number.
 */
export const NumberFormSchema = z.object({
  number: z.coerce.number(),
});

/**
 * NumberForm is a type inferred from NumberFormSchema.
 */
export type NumberForm = z.infer<typeof NumberFormSchema>;
