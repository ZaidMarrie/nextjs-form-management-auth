"use server";

import { z } from "zod";
import { registerSchema } from "./schemas";

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
