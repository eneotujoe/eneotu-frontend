import * as z from "zod"

export const contactMeSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .trim(),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .regex(
      /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
      "Please enter a valid phone number"
    )
    .trim()
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Please provide more details (at least 10 characters)")
    .max(1000, "Message must be less than 1000 characters")
    .trim(),
})

export type ContactMeFormData = z.infer<typeof contactMeSchema>

export interface ContactMeResult {
  success: boolean
  error?: string
}
