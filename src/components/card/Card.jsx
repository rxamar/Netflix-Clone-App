import React from "react";
import "./card.css";
import Movie from "./../../assets/images/movie.jpg";
import { FaPlayCircle } from "react-icons/fa";

const Card = () => {
	return (
		<div className="rows">
			<div className="single-card">
				<div className="card-img">
					<img src={Movie} alt="single movie card" />
					<div className="card-content">
						<h3>Movie Title</h3>
						<div className="icons">
							<FaPlayCircle />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
