import { z } from "zod";
import { registerSchema } from "./schemas";

export type RegisterSchema = z.infer<typeof registerSchema>;

export type RegisterFormProps = {
	onDataAction: (data: RegisterSchema) => Promise<{
		message: string;
		user?: RegisterSchema;
		issues?: string[];
	}>;
};
