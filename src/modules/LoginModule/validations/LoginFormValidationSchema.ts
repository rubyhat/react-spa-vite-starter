import { z } from "zod";

export const LoginFormValidationSchema = z.object({
  login: z.string().min(1, { message: "Введите логин" }),
  password: z.string().min(1, { message: "Введите пароль" }),
});

export type LoginFormDataTypes = z.infer<typeof LoginFormValidationSchema>;
