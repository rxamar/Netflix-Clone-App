import React from "react";
import "./card.css";
import Movie from "./../../assets/images/movie.jpg";
import { FaPlayCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Card = () => {
	return (
		<>
			<div className="rows">
				<div className="single-card">
					<div className="card-img">
						<img src={Movie} alt="single movie card" className="test" />
						<div className="card-content">
							<div className="icons">
								<FaPlayCircle className="play-icon" />
								<FaRegHeart className="heart-icon" />
							</div>
							<h3 className="movie-title">
								Movie Title Movie Title Movie Title
							</h3>
						</div>
					</div>
				</div>

				<div className="single-card">
					<div className="card-img">
						<img src={Movie} alt="single movie card" />
						<div className="card-content">
							<div className="icons">
								<FaPlayCircle className="play-icon" />
								<FaRegHeart className="heart-icon" />
							</div>
							<h3 className="movie-title">
								Movie Title Movie Title Movie Title
							</h3>
						</div>
					</div>
				</div>
				<div className="single-card">
					<div className="card-img">
						<img src={Movie} alt="single movie card" className="test" />
						<div className="card-content">
							<div className="icons">
								<FaPlayCircle className="play-icon" />
								<FaRegHeart className="heart-icon" />
							</div>
							<h3 className="movie-title">
								Movie Title Movie Title Movie Title
							</h3>
						</div>
					</div>
				</div>

				<div className="single-card">
					<div className="card-img">
						<img src={Movie} alt="single movie card" />
						<div className="card-content">
							<div className="icons">
								<FaPlayCircle className="play-icon" />
								<FaRegHeart className="heart-icon" />
							</div>
							<h3 className="movie-title">
								Movie Title Movie Title Movie Title
							</h3>
						</div>
					</div>
				</div>
				<div className="single-card">
					<div className="card-img">
						<img src={Movie} alt="single movie card" className="test" />
						<div className="card-content">
							<div className="icons">
								<FaPlayCircle className="play-icon" />
								<FaRegHeart className="heart-icon" />
							</div>
							<h3 className="movie-title">
								Movie Title Movie Title Movie Title
							</h3>
						</div>
					</div>
				</div>

				<div className="single-card">
					<div className="card-img">
						<img src={Movie} alt="single movie card" />
						<div className="card-content">
							<div className="icons">
								<FaPlayCircle className="play-icon" />
								<FaRegHeart className="heart-icon" />
							</div>
							<h3 className="movie-title">
								Movie Title Movie Title Movie Title
							</h3>
						</div>
					</div>
				</div>
				<div className="single-card">
					<div className="card-img">
						<img src={Movie} alt="single movie card" className="test" />
						<div className="card-content">
							<div className="icons">
								<FaPlayCircle className="play-icon" />
								<FaRegHeart className="heart-icon" />
							</div>
							<h3 className="movie-title">
								Movie Title Movie Title Movie Title
							</h3>
						</div>
					</div>
				</div>

				<div className="single-card">
					<div className="card-img">
						<img src={Movie} alt="single movie card" />
						<div className="card-content">
							<div className="icons">
								<FaPlayCircle className="play-icon" />
								<FaRegHeart className="heart-icon" />
							</div>
							<h3 className="movie-title">
								Movie Title Movie Title Movie Title
							</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
