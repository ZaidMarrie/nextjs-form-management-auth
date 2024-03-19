import RegisterOnDataAction from "@/components/register-form-on-data-action";
import { onDataAction } from "@/lib/actions";

function RegisterDataActionPage() {
	return (
		<main className="flex flex-col items-start justify-center gap-8 mx-auto p-8 max-w-4xl">
			<h1 className="text-3xl font-bold">
				Register With Data to Server Action
			</h1>
			<RegisterOnDataAction onDataAction={onDataAction} />
		</main>
	);
}

export default RegisterDataActionPage;
