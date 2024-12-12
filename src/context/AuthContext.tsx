import { z } from "zod";

export const loginFormSchema = z.object({
     email: z.string()
          .min(3, 'Email is required')
          .email('Invalid email format'),
     password: z.string()
          .min(8, 'Password must be at least 8 characters')
}).required()

export type LoginFormSchema = z.infer<typeof loginFormSchema>