import React from "react";
import "./hero-banner.css";
import HeroImg from "./../../assets/images/hero-banner.jpg";
import Navbar from "../navbar/Navbar";

const HeroBanner = () => {
	return (
		<>
			<main className="hero-banner">
				<Navbar isUser />
				<div className="hero-img">
					<img src={HeroImg} alt="hero banner img" />
				</div>
			</main>
		</>
	);
};

export default HeroBanner;
