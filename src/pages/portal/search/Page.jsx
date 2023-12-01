import React from "react";
import "./search.css";
import { useState, useEffect } from "react";
import axios from "../../../libs/axios";
import Navbar from "../../../components/navbar/Navbar";
import Input from "../../../components/input/Input";

const Page = () => {
	const [search, setSearch] = useState("");
	const [movies, setMovies] = useState([]);
	// const [isSearching, setIsSearching] = useState(false);

	const getMovies = async (query) => {
		try {
			const response = await axios.get(
				`search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
			);
			const results = response.data.results;
			// console.log(response);
			return results;
		} catch (err) {
			console.log(err);
			return [];
		}
	};

	useEffect(() => {
		if (search) {
			getMovies(search).then((results) => {
				setMovies(results);
			});
		}
	}, [search]);

	useEffect(() => {
		console.log(movies);
	}, [movies]);

	return (
		<div>
			{/* <input
				style={{
					color: "white",
				}}
				type="search"
				value={search}
				name=""
				id=""
				placeholder="Search"
				onChange={(e) => setSearch(e.target.value)}
			/> */}

			<Navbar isUser />
			{/* <Input type="search" /> */}
		</div>
	);
};

export default Page;
