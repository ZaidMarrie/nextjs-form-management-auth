"use server";

import { RegisterSchema } from "./definitions";
import { registerSchema } from "./schemas";

export async function onDataAction(data: RegisterSchema) {
	const parsed = registerSchema.safeParse(data);

	if (parsed.success) {
		return { message: "User registered", user: parsed.data };
	} else {
		return {
			message: parsed.error.message,
			issues: parsed.error.issues.map((issue) => issue.message),
		};
	}
}

export async function onFormDataAction(formData: FormData) {
	const data = Object.fromEntries(formData);
	const parsed = registerSchema.safeParse(data);

	if (parsed.success) {
		return { message: "User registered", user: parsed.data };
	} else {
		return {
			message: parsed.error.message,
			issues: parsed.error.issues.map((issue) => issue.message),
		};
	}
}
