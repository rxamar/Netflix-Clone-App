import React, { useState } from "react";
import "./signIn.css";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSignIn = () => {
  //   // Implement sign-in logic here
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  // };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="sign-text">Sign In</h2>
        <div className="input-box">
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onchange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onchange={(e) => setPassword(e.target.value)}
          />

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
        <div className="new">
          <p>New to Netflix?</p>
          <a href="/">Sign up now</a>
        </div>
        <div className="para">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
