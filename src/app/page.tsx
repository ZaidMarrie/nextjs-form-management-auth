import Link from "next/link";

function HomePage() {
	return (
		<main className="flex flex-col items-start justify-center gap-8 mx-auto p-8 max-w-4xl">
			<h1 className="text-2xl font-bold">
				Below are four ways to manage forms in the Next.js app router:
			</h1>
			<ul className="pl-8 list-disc">
				<li>
					<Link href="/register-with-json" className="text-blue-500">
						JSON Payload to an API endpoint
					</Link>
				</li>
				<li className="mt-4">
					<Link href="/register-with-formdata" className="text-blue-500">
						FormData to an API endpoint
					</Link>
				</li>
				<li className="mt-4">
					<Link href="/register-with-data-action" className="text-blue-500">
						Sending data to a server action
					</Link>
				</li>
				<li className="mt-4">
					<Link href="/register-with-formdata-action" className="text-blue-500">
						Sending formData to a server action
					</Link>
				</li>
			</ul>
		</main>
	);
}

export default HomePage;
