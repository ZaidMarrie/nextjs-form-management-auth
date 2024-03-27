import LoginForm from "@/components/forms/login-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { loginUser } from "@/lib/actions";

function LoginPage() {
	return (
		<main className="max-w-lg mx-auto">
			<Card>
				<CardHeader className="pb-4">
					<CardTitle>Login to your account</CardTitle>
					<CardDescription>
						Enter your email and password to login.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<LoginForm onLogin={loginUser} />
				</CardContent>
			</Card>
		</main>
	);
}

export default LoginPage;
