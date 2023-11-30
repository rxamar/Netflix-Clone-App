import React from "react";
import Button from "../button/Button";
import Logo from "./../../assets/images/Netflix-logo.png";
import "./navbar.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo-img">
				<img src={Logo} alt="netflix logo" />
			</div>

			<div className="landing-topright">
				<select name="language" id="language">
					<option value="english">English</option>
					<option value="hindi">हिंदी</option>
					<option value="tamil">தமிழ்</option>
				</select>

				<Button
					size="small"
					rounded="rounded"
					color="white"
					bg="bg-1"
					value="Sign In"
				/>
			</div>
		</div>
	);
};

export default Navbar;
