"use client";

import { z } from "zod";
import { SyntheticEvent, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CardFooter } from "../ui/card";
import { Separator } from "../ui/separator";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { GoalIcon } from "lucide-react";
import { RegisterProps } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/schemas";
import { cn } from "@/lib/utils";

function RegisterForm({ onRegister }: RegisterProps) {
	const formRef = useRef<HTMLFormElement>(null);
	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			fullName: "",
			email: "",
			password: "",
		},
	});

	const [state, formAction] = useFormState(onRegister, { message: "" });

	return (
		<Form {...form}>
			<form
				ref={formRef}
				action={formAction}
				className="space-y-4"
				onSubmit={form.handleSubmit(() => formRef?.current?.submit())}
			>
				<div
					className={cn(
						"text-sm",
						state?.issues ? "text-red-600" : "text-green-400"
					)}
				>
					{state.message}
				</div>
				<FormField
					name="fullName"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Full Name</FormLabel>
							<FormControl>
								<Input type="text" {...field} />
							</FormControl>
							<FormDescription>Your full name.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="email"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type="email" {...field} />
							</FormControl>
							<FormDescription>Your email address.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="password"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type="password" {...field} />
							</FormControl>
							<FormDescription>Your secret password.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<SubmitButton />
			</form>

			<div>
				<div className="flex items-center gap-2 relative my-5">
					<Separator className="shrink" />
					<span className="text-nowrap text-sm uppercase">
						Or continue with
					</span>
					<Separator className="shrink" />
				</div>

				<Button
					type="button"
					// variant="outline"
					className="w-full flex items-center gap-2"
				>
					<span>
						<GoalIcon />
					</span>
					<span>Google</span>
				</Button>

				<p className="text-center text-sm text-muted-foreground mt-4 px-8">
					By clicking continue, you agree to our Terms of Service and Privacy
					Policy.
				</p>
			</div>
		</Form>
	);
}

export function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<CardFooter className="mt-4 p-0">
			<Button
				type="submit"
				color="primary"
				disabled={pending}
				className="w-full"
			>
				Register
			</Button>
		</CardFooter>
	);
}

RegisterForm.displayName = "RegisterForm";

export default RegisterForm;
