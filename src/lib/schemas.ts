import { z } from "zod";

export const registerSchema = z.object({
	first: z.string().trim().min(1, { message: "First name is required." }),
	last: z.string().trim().min(1, { message: "Last name is required." }),
	email: z.string().email({ message: "Invalid email address." }),
});
