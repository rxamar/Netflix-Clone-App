import React, { useState } from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import "./signUp.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSignIn = () => {
  //   // Implement sign-in logic here
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  // };

  return (
    <div className="signUp-container">
      <div className="signUp-box">
        <h2 className="sign-text">Sign up</h2>
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
              value="Sign Up"
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
          <p>Already subscribed to netflix?</p>
          <a href="/">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
