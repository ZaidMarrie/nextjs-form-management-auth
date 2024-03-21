import RegisterForm from "@/components/forms/register-form";
import { onRegisterAction } from "@/lib/actions";

function RegisterPage() {
	return (
		<main className="max-w-lg mx-auto space-8">
			<h1 className="text-3xl font-bold">Register</h1>
			<RegisterForm onRegisterAction={onRegisterAction} />
		</main>
	);
}

export default RegisterPage;
