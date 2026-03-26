import { z } from "zod";

export const authSchema = z.object({
  login: z.string().email({ message: "Invalid email address" }).max(60),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

type authSchema = z.infer<typeof authSchema>;

export type TAuthSchema = z.infer<typeof authSchema>;
