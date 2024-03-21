export const validatePassword = async (data: string) => {
	if (data.toLowerCase() === "password") return false;

	return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(data);
};
