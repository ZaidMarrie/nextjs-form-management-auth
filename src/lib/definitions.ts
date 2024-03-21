import { z } from "zod";
import { registerSchema } from "./schemas";

export type User = z.infer<typeof registerSchema>;

export type RegisterProps = {
	onRegisterAction: (
		prevState: {
			user?: User;
			issues?: string[];
		},
		data: FormData
	) => Promise<{
		message: string;
		user?: User;
		issues?: string[];
	}>;
};
