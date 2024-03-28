"use server";

import { z } from "zod";
import { loginSchema, registerSchema } from "./schemas";
import { redirect } from "next/navigation";
import { encrypt } from "./auth";
import { cookies } from "next/headers";

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
	// Verify credentials && get the user
	const data = Object.fromEntries(formData);
	const parsed = await loginSchema.safeParseAsync(data);

	if (parsed.success) {
		// Create the session
		const expires = new Date(Date.now() + 10 * 1000);
		const session = await encrypt({ user: parsed.data, expires });

		// Save the session in a cookie
		cookies().set("session", session, { expires, httpOnly: true });

		// redirect("/");
		return { message: "Login successful", user: parsed.data };
	} else {
		return {
			message: "Invalid credentials",
			issues: parsed.error.issues.map((issue) => issue.message),
		};
	}
}

export async function logoutUser() {
	// Destroy the session
	cookies().set("session", "", { expires: new Date(0) });
}
