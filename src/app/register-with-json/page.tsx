import RegisterWithJson from "@/components/register-form-json";

function RegisterJsonPage() {
	return (
		<main className="flex flex-col items-start justify-center gap-8 mx-auto p-8 max-w-4xl">
			<h1 className="text-3xl font-bold">
				Register With JSON Payload to API Endpoint
			</h1>
			<RegisterWithJson />
		</main>
	);
}

export default RegisterJsonPage;
