import { z } from "zod";
import { loginSchema, registerSchema } from "./schemas";

// Types
// export type User = z.infer<typeof registerSchema>;

// Component Prop Types
export type RegisterProps = {
	onRegister: (
		prevState: {
			user?: z.infer<typeof registerSchema>;
			issues?: string[];
		},
		data: FormData
	) => Promise<{
		message: string;
		user?: z.infer<typeof registerSchema>;
		issues?: string[];
	}>;
};

export type LoginProps = {
	onLogin: (
		prevState: { user?: z.infer<typeof loginSchema>; issues?: string[] },
		data: FormData
	) => Promise<{
		message: string;
		user?: z.infer<typeof loginSchema>;
		issues?: string[];
	}>;
};
