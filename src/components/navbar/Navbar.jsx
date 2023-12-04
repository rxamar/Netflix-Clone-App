import React from "react";
import Button from "../button/Button";
import Logo from "./../../assets/images/Netflix-logo.png";
import "./navbar.css";
import profile from "../../assets/images/profile.png";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../api/movies";

const Navbar = ({ isUser }) => {
<<<<<<< HEAD
  return (
    <div className="navbar">
      <div className="logo-img">
        <img src={Logo} alt="netflix logo" />
=======
	const navigate = useNavigate();
	return (
		<div className="navbar">
			<div className="logo-img">
				<img src={Logo} alt="netflix logo" />
>>>>>>> 3bba35774be8b8745f8910730878b46712ffc7ff

        {isUser && (
          <div className="nav">
            <ul>
              <Link to="/home" className="link">
                Home
              </Link>
              <Link to="/mylist" className="link">
                My List
              </Link>
              <Link to="/search" className="link">
                Search
              </Link>
            </ul>
          </div>
        )}
      </div>
      {isUser ? (
        <div className="log-container">
          <img src={profile} alt="" width={30} height={30} />
          <Button
            size="medium"
            rounded="rounded"
            color="white"
            bg="bg-1"
            value="Log Out"
          />
        </div>
      ) : (
        <div className="navbar-topright">
          <div className="language-select">
            <select name="language" id="language">
              <option value="english">English</option>
              <option value="hindi">हिंदी</option>
              <option value="tamil">தமிழ்</option>
            </select>
          </div>

<<<<<<< HEAD
          <Button
            size="small"
            rounded="rounded"
            color="white"
            bg="bg-1"
            value="Sign In"
          />
        </div>
      )}
    </div>
  );
=======
			{isUser ? (
				<div className="log-container">
					<img src={profile} alt="" width={30} height={30} />
					<Button
						size="medium"
						rounded="rounded"
						color="white"
						bg="bg-1"
						value="Log Out"
						onclick={() => logout()}
					/>
				</div>
			) : (
				<div className="navbar-topright">
					<div className="language-select">
						<select name="language" id="language">
							<option value="english">English</option>
							<option value="hindi">हिंदी</option>
							<option value="tamil">தமிழ்</option>
						</select>
					</div>

					<Button
						size="small"
						rounded="rounded"
						color="white"
						bg="bg-1"
						value="Sign In"
						onclick={() => navigate("signin")}
					/>
				</div>
			)}
		</div>
	);
>>>>>>> 3bba35774be8b8745f8910730878b46712ffc7ff
};

export default Navbar;
