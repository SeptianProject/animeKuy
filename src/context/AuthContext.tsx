import { z } from "zod";

export const loginFormSchema = z.object({
     email: z.string()
          .min(1, 'Email is required')
          .email('Invalid email format'),
     password: z.string()
          .min(5, 'Password must be at least 5 characters')
})

export const registerFormSchema = z.object({
     email: z.string()
          .min(1, 'Email is required')
          .email('Invalid email format'),
     password: z.string()
          .min(5, 'Password must be at least 5 characters'),
     confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
     message: 'Password do not match',
     path: ['confirmPassword']
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
export type RegisterFormSchema = z.infer<typeof registerFormSchema>