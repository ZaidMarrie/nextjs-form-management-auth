"use client";

import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { RegisterProps, User } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/schemas";

function RegisterForm({ onRegisterAction }: RegisterProps) {
	const formRef = useRef<HTMLFormElement>(null);
	const form = useForm<User>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			fullName: "",
			email: "",
			password: "",
			// terms: true,
		},
	});

	const [state, formAction] = useFormState(onRegisterAction, { message: "" });

	return (
		<Form {...form}>
			<form
				ref={formRef}
				action={formAction}
				className="space-y-4"
				onSubmit={() => form.handleSubmit(() => formRef?.current?.submit())}
			>
				<div>{state.message}</div>
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
				{/* <FormField
					name="terms"
					control={form.control}
					render={({ field }) => (
						<FormItem>
							<div className="flex items-center gap-2">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<FormLabel>Accept terms and conditions</FormLabel>
							</div>
							<FormMessage />
						</FormItem>
					)}
				/> */}

				<SubmitButton />
			</form>
		</Form>
	);
}

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<Button type="submit" color="primary" disabled={pending}>
			Register
		</Button>
	);
}

export default RegisterForm;
