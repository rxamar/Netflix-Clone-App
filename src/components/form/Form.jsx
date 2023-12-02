import React, { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import "./form.css";
import { Link } from "react-router-dom";
const Form = ({ isSignUp }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
	};
	// const { email, password } = values;
	return (
		<div className="signin-container">
			<div className="signin-box">
				<h2 className="sign-text">{isSignUp ? "Sign Up" : "Sign In"}</h2>
				<form onSubmit={handleSubmit}>
					<div className="input-box">
						<Input
							name="email"
							type="email"
							label="Email address"
							value={email}
							onchange={(event) => setEmail(event.target.value)}
						/>
						<Input
							name="password"
							type="password"
							label="Password"
							value={password}
							onchange={(event) => setPassword(event.target.value)}
						/>

						<div className="button-align">
							<Button
								size="x-large"
								color="white"
								rounded="rounded"
								bg="bg-1"
								value={isSignUp ? "Sign Up" : "Sign In"}
							/>
						</div>
					</div>
				</form>
				<div className="checkbox">
					<div className="remember">
						<Input type="checkbox" className="check" />
						<p>Remember me</p>
					</div>
					{/* <a href="/">Need help?</a> */}
				</div>
				{isSignUp ? (
					<>
						<div className="new">
							<p>Already subscribed to netflix?</p>
							<Link to="/signin">Sign in</Link>
						</div>
					</>
				) : (
					<>
						<div className="new">
							<p>New to Netflix?</p>
							<Link to="/signup">Sign up now</Link>
						</div>
						<div className="para">
							<p>
								This page is protected by Google reCAPTCHA to ensure you're not
								a bot.
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Form;
