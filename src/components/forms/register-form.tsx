"use client";

import { z } from "zod";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CardFooter } from "../ui/card";
import { Separator } from "../ui/separator";
import { useToast } from "../ui/use-toast";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { RegisterProps } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/schemas";

function RegisterForm({ onRegister }: RegisterProps) {
	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			fullName: "",
			email: "",
			password: "",
		},
	});
	const { toast } = useToast();
	const [state, registerAction] = useFormState(onRegister, { message: "" });

	const onValid = (data: z.infer<typeof registerSchema>, event: any) => {
		const formData = new FormData();
		formData.append("fullName", data.fullName);
		formData.append("email", data.email);
		formData.append("password", data.password);
		registerAction(formData);

		if (state.message && state.issues) {
			toast({
				title: state.message,
				description: "Something went wrong. Try again.",
				variant: "destructive",
			});
		}
	};

	return (
		<>
			<Form {...form}>
				<form className="space-y-4" onSubmit={form.handleSubmit(onValid)}>
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
			</Form>

			<CardFooter className="mt-4 p-0 flex-col">
				<div className="flex items-center gap-2 relative my-5">
					<Separator className="shrink" />
					<span className="text-nowrap text-sm text-muted-foreground uppercase">
						Or continue with
					</span>
					<Separator className="shrink" />
				</div>

				<div className="flex justify-center items-center gap-4">
					<Button type="button" variant="outline">
						Google
					</Button>
					<Button type="button" variant="outline">
						Github
					</Button>
				</div>

				<p className="text-center text-sm text-muted-foreground mt-4 px-8">
					Already have an account?{" "}
					<Button variant="link" className="px-2 py-0" asChild>
						<Link href="/login">Login</Link>
					</Button>
				</p>
			</CardFooter>
		</>
	);
}

export function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<Button type="submit" color="primary" disabled={pending} className="w-full">
			Register
		</Button>
	);
}

RegisterForm.displayName = "RegisterForm";

export default RegisterForm;
