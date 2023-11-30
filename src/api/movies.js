import axios from "../libs/axios";
import requests from "../libs/request";
export const getFetchTrending = async () => {
	try {
		const { data } = await axios.get(requests.fetchTrending);
		console.log(data);

		return data;
	} catch (error) {
		alert(JSON.stringify(error));
		return null;
	}
};
export const getFetchNetflixOriginals = async () => {
	try {
		const { data } = await axios.get(requests.fetchNetflixOriginals);
		console.log(data);

		return data;
	} catch (error) {
		alert(JSON.stringify(error));
		return null;
	}
};
export const getFetchTopRated = async () => {
	try {
		const { data } = await axios.get(requests.fetchTopRated);
		return data;
	} catch (error) {
		alert(JSON.stringify(error));
		return null;
	}
};
export const getFetchActionMovies = async () => {
	try {
		const { data } = await axios.get(requests.fetchActionMovies);

		return data;
	} catch (error) {
		alert(JSON.stringify(error));
		return null;
	}
};
export const getFetchComedyMovies = async () => {
	try {
		const { data } = await axios.get(requests.fetchComedyMovies);

		return data;
	} catch (error) {
		alert(JSON.stringify(error));
		return null;
	}
};
export const getFetchHorrorMovies = async () => {
	try {
		const { data } = await axios.get(requests.fetchHorrorMovies);

		return data;
	} catch (error) {
		alert(JSON.stringify(error));
		return null;
	}
};
export const getFetchRomanceMovies = async () => {
	try {
		const { data } = await axios.get(requests.fetchRomanceMovies);

		return data;
	} catch (error) {
		alert(JSON.stringify(error));
		return null;
	}
};
export const getFetchAdventureMovies = async () => {
	try {
		const { data } = await axios.get(requests.fetchAdventureMovies);
		console.log(data);

		return data;
	} catch (error) {
		alert(JSON.stringify(error));
		return null;
	}
};
export const getFetchWarMovies = async () => {
	try {
		const { data } = await axios.get(requests.fetchWarMovies);

		return data;
	} catch (error) {
		alert(JSON.stringify(error));
		return null;
	}
};
const getFetchScienceFictionMovies = async () => {
	try {
		const { data } = await axios.get(requests.fetchScienceFictionMovies);

		return data;
	} catch (error) {
		alert(JSON.stringify(error));
		return null;
	}
};
export const getFetchDocumentaries = async () => {
	try {
		const { data } = await axios.get(requests.fetchDocumentaries);

		return data;
	} catch (error) {
		alert(JSON.stringify(error));
		return null;
	}
};
export const getSearchUrl = async () => {
	try {
		const { data } = await axios.get(requests.fetchNetflixOriginals);

		return data;
	} catch (error) {
		alert(JSON.stringify(error));
		return null;
	}
};
