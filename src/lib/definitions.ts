import { z } from "zod";
import { registerSchema } from "./schemas";

// Types
export type User = z.infer<typeof registerSchema>;

// Component Prop Types
export type RegisterProps = {
	onRegister: (
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
