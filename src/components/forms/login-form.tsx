"use client";

import { z } from "zod";
import Link from "next/link";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useFormState, useFormStatus } from "react-dom";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CardFooter } from "../ui/card";
import { Separator } from "../ui/separator";
import {
	Form,
	FormDescription,
	FormLabel,
	FormItem,
	FormMessage,
	FormControl,
	FormField,
} from "../ui/form";
import { loginSchema } from "@/lib/schemas";
import { LoginProps } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";

function LoginForm({ onLogin }: LoginProps) {
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const { toast } = useToast();
	const [state, loginAction] = useFormState(onLogin, { message: "" });

	const onSubmit = (data: z.infer<typeof loginSchema>, event: any) => {
		const formData = new FormData();
		formData.append("email", data.email);
		formData.append("password", data.password);
		loginAction(formData);

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
				<form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						name="email"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input type="email" {...field} />
								</FormControl>
								<FormDescription>Your email address</FormDescription>
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
								<FormDescription>Your secret password</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<SubmitButton />
				</form>
			</Form>

			<CardFooter className="mt-4 p-0 flex-col">
				<div className="w-full flex items-center gap-2 relative my-5">
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
					Don&apos;t have an account?{" "}
					<Button variant="link" className="px-2 py-0" asChild>
						<Link href="/register">Register</Link>
					</Button>
				</p>
			</CardFooter>
		</>
	);
}

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<Button type="submit" color="primary" disabled={pending} className="w-full">
			Login
		</Button>
	);
}

LoginForm.displayName = "LoginForm";

export default LoginForm;
