import { z } from "zod";

export const authSchema = z.object({
  login: z
    .string()
    .min(3, { message: "Login must be at least 3 characters long" })
    .trim(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

type authSchema = z.infer<typeof authSchema>;

export type TAuthSchema = z.infer<typeof authSchema>;
