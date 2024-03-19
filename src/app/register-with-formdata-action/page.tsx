import RegisterOnFormDataAction from "@/components/register-form-on-formdata-action";
import { onFormDataAction } from "@/lib/actions";

function RegisterFormDataPage() {
	return (
		<main className="flex flex-col items-start justify-center gap-8 mx-auto p-8 max-w-4xl">
			<h1 className="text-3xl font-bold">
				Register With FormData to Server Action
			</h1>
			<RegisterOnFormDataAction onFormDataAction={onFormDataAction} />
		</main>
	);
}

export default RegisterFormDataPage;
