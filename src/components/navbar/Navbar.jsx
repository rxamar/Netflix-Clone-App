import React from "react";
import Button from "../button/Button";
import Logo from "./../../assets/images/Netflix-logo.png";
import "./navbar.css";
import profile from "../../assets/images/profile.png";
import { Link } from "react-router-dom";

const Navbar = ({ isUser }) => {
  return (
    <div className="navbar">
      <div className="logo-img">
        <img src={Logo} alt="netflix logo" />

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
};

export default Navbar;
