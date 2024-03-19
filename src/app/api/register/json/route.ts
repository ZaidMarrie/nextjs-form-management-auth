import { NextRequest, NextResponse } from "next/server";
import { registerSchema } from "@/lib/schemas";

export const POST = async (req: NextRequest) => {
	const data = await req.json();
	const parsed = registerSchema.safeParse(data);

	if (parsed.success) {
		return NextResponse.json({ message: "User registered", user: parsed.data });
	} else {
		return NextResponse.json({
			error: parsed.error,
			issues: parsed.error.issues.map((issue) => issue.message),
		});
	}
};
