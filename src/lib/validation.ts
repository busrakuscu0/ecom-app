import { z } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  street: z.string().min(5, "Street address must be at least 5 characters."),
  city: z.string().min(2, "City name is required."),
  zip: z.string().regex(/^\d{5}$/, "Postal code must be exactly 5 digits."),
  phone: z.string().min(8, "Phone number is too short."),
});
