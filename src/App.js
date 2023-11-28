import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "./libs/axios";
import requests from "./libs/request";
import { useEffect } from "react";

function App() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${requests.fetchTrending}`);
      console.log(response.data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
