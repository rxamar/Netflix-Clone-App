import "./card.css";
import { FaPlayCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { addToWishlist } from "../../api/movies";
const baseUrl = "https://image.tmdb.org/t/p/w500";

const Card = ({ movie, style, favMovies }) => {
	// console.log(favMovies);
	const isEqual = favMovies?.includes(movie?.id);
	console.log(isEqual);
	return (
		<div className={`single-card  ${style || ""} `}>
			<div className="card-img">
				<img
					src={`${baseUrl}${movie.backdrop_path}`}
					alt="single movie card"
					className="test"
				/>
				<div className="card-content">
					<div className="icons">
						<FaPlayCircle className="play-icon" />
						<FaHeart
							onClick={() => addToWishlist(movie.id)}
							fill={isEqual ? "red" : "white"}
							className={`heart-icon `}
						/>
					</div>
					<h3 className="movie-title">{movie.title || movie.name}</h3>
				</div>
			</div>
		</div>
	);
};

export default Card;
