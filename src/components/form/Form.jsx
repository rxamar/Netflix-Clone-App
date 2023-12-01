import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import "./form.css";
import { Link } from "react-router-dom";
const Form = ({ values, isSignUp, onSubmit, onChange }) => {
	const { email, password } = values;
	return (
		<div className="signin-container">
			<div className="signin-box">
				<h2 className="sign-text">Sign In</h2>
				<div className="input-box">
					<Input
						type="email"
						placeholder="Email address"
						value={email}
						onchange={onChange}
					/>
					<Input
						type="password"
						placeholder="Password"
						value={password}
						onchange={onChange}
					/>

<<<<<<< HEAD
					<div className="button-align">
						<Button
							size="x-large"
							color="white"
							rounded="rounded"
							bg="bg-1"
							value="Sign In"
						/>
					</div>
				</div>
				<div className="checkbox">
					<div className="remember">
						<Input type="checkbox" className="check" />
						<p>Remember me</p>
					</div>
					<a href="/">Need help?</a>
				</div>
				{isSignUp ? (
					<>
						<div className="new">
							<p>Already subscribed to netflix?</p>
							<a href="/">Sign in</a>
						</div>
					</>
				) : (
					<>
						<div className="new">
							<p>New to Netflix?</p>
							<a href="/">Sign up now</a>
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
=======
          <div className="button-align">
            <Button
              size="x-large"
              color="white"
              rounded="rounded"
              bg="bg-1"
              value="Sign In"
            />
          </div>
        </div>
        <div className="checkbox">
          <div className="remember">
            <Input type="checkbox" className="check" />
            <p>Remember me</p>
          </div>
          <a href="/">Need help?</a>
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
              <a href="/">Sign up now</a>
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
>>>>>>> ceebbf96b43d91f2b60c440e43e558584f641799
};

export default Form;
