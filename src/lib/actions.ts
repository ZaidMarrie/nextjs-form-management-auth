"use server";

import { User } from "./definitions";
import { registerSchema } from "./schemas";

export async function onRegisterAction(
	prevState: {
		user?: User;
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
			message: parsed.error.message,
			issues: parsed.error.issues.map((issue) => issue.message),
		};
	}
}
