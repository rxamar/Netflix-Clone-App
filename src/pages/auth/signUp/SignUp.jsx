import React, { useState } from "react";
import Form from "../../../components/form/Form";
import "./signUp.css";
import { getFetchTrending } from "../../../api/movies";
const SignUp = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const handleSubmit = () => {};
	const handleChange = () => {};
	// const handleSignIn = () => {
	//   // Implement sign-in logic here
	//   console.log("Email:", email);
	//   console.log("Password:", password);
	// };
	getFetchTrending();

	return (
		<Form
			values={user}
			isSignUp
			onChange={handleChange}
			onSubmit={handleSubmit}
		/>
	);
};

export default SignUp;
