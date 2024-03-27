import { z } from "zod";
import { validatePassword } from "./validation";

export const registerSchema = z.object({
	fullName: z.string().trim().min(6, { message: "Full name is required" }),
	email: z.string().trim().email({ message: "Invalid email provided" }),
	password: z
		.string()
		.min(8, { message: "Password should be atleast 8 characters" })
		.refine(validatePassword, {
			message: "Include atleast 1 number, 1 uppercase, & 1 lowercase letter",
		}),
});

export const loginSchema = z.object({
	email: z.string().trim().email({ message: "Invalid email provided" }),
	password: z
		.string()
		.min(8, { message: "Password should be atleast 8 characters" })
		.refine(validatePassword, {
			message: "Include atleast 1 number, 1 uppercase, & 1 lowercase letter",
		}),
});
