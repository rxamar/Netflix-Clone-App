import React from "react";
import "./banner.css";
import Content from "../heading/Content";
import Heading from "../heading/Heading";
import BanImg from "../../assets/images/ban-tv.png";

const Banner = () => {
	return (
		<div className="single-banner">
			<div className="content-section">
				<Heading color="white" size="bold" title="Enjoy on your TV" />
				<Content
					color="white"
					content="Watch on smart TVs, PlayStation, Xbox,."
				/>
			</div>
			<div className="image-section">
				<img src={BanImg} alt="banner img" />
			</div>
		</div>
	);
};

export default Banner;
