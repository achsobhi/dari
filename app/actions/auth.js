"use server";
import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  password: z.string().min(1),
});
export async function SignUp(state, formData) {
  const valid = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!valid.success) {
    return {
      errors: valid.error.flatten().fieldErrors,
    };
  } else {
    return {
      message: "good",
    };
  }
}
