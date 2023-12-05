import "./signIn.css";

import React from "react";
import Form from "../../../components/form/Form";

const SignIn = () => {
	return (
		<div className="auth-page">
			<Form isSignin />
		</div>
	);
};

export default SignIn;
