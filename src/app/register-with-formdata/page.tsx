import RegisterWithFormData from "@/components/register-form-formdata";

function RegisterFormDataPage() {
	return (
		<main className="flex flex-col items-start justify-center gap-8 mx-auto p-8 max-w-4xl">
			<h1 className="text-3xl font-bold">
				Register With FormData to API Endpoint
			</h1>
			<RegisterWithFormData />
		</main>
	);
}

export default RegisterFormDataPage;
