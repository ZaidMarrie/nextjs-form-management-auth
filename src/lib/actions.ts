"use server";

import { z } from "zod";
import { loginSchema, registerSchema } from "./schemas";
import { redirect } from "next/navigation";

export async function registerUser(
	prevState: {
		user?: z.infer<typeof registerSchema>;
		issues?: string[];
	},
	formData: FormData
) {
	const data = Object.fromEntries(formData);
	const parsed = await registerSchema.safeParseAsync(data);

	if (parsed.success) {
		return { message: "User registered", user: parsed.data };
	} else {
		return {
			message: "Invalid data",
			issues: parsed.error.issues.map((issue) => issue.message),
		};
	}
}

export async function loginUser(
	prevState: {
		user?: z.infer<typeof loginSchema>;
		issues?: string[];
	},
	formData: FormData
) {
	const data = Object.fromEntries(formData);
	const parsed = await loginSchema.safeParseAsync(data);

	if (parsed.success) {
		// redirect("/");
		return { message: "Login successful", user: parsed.data };
	} else {
		return {
			message: "Invalid credentials",
			issues: parsed.error.issues.map((issue) => issue.message),
		};
	}
}
