import { z } from "zod";

export const PersonSchema = z.object({
  name: z.string().min(1, "Name is required"),
  last: z.string().min(1, "Last is required"),
  dob: z.date(),
  address: z.string().min(1, "Address is required"),
  email: z.string().email(),
  role: z.string().min(1, "Role is required"),
});
