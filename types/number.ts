import { z } from "zod";

export const NumberFormSchema = z.object({
  number: z.coerce.number(),
});

export type NumberForm = z.infer<typeof NumberFormSchema>;
