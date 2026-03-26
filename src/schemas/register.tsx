import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(2, { message: "Name is too short" }).max(60),
    surname: z.string().min(2, { message: "Surname is too short" }).max(60),
    email: z.string().email({ message: "Invalid email address" }).max(60),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type TRegisterSchema = z.infer<typeof registerSchema>;
