"use client";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/lib/schemas";
import { RegisterSchema } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";

function RegisterWithJson() {
	const form = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			first: "",
			last: "",
			email: "",
		},
	});

	const onSubmit = async (data: RegisterSchema) => {
		const res = await fetch("/api/register/json", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const submissionData = await res.json();
		console.log(submissionData);
	};

	return (
		<Form {...form}>
			<form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
				<div className="flex gap-2">
					<FormField
						control={form.control}
						name="first"
						render={({ field }) => (
							<FormItem>
								<FormLabel>First Name</FormLabel>
								<FormControl>
									<Input placeholder="" {...field} />
								</FormControl>
								<FormDescription>Your first name.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="last"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<Input placeholder="" {...field} />
								</FormControl>
								<FormDescription>Your last name.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="" {...field} />
							</FormControl>
							<FormDescription>Your email address.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Register</Button>
			</form>
		</Form>
	);
}

export default RegisterWithJson;
