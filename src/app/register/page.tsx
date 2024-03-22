import RegisterForm from "@/components/forms/register-form";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { registerUser } from "@/lib/actions";

function RegisterPage() {
	return (
		<main className="max-w-lg mx-auto">
			<Card>
				<CardHeader className="pb-4">
					<CardTitle>Create an account</CardTitle>
					<CardDescription>
						Enter your details below to create an account.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<RegisterForm onRegister={registerUser} />
				</CardContent>
			</Card>
		</main>
	);
}

export default RegisterPage;
