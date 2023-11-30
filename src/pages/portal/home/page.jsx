import { useEffect, useState } from "react";
import Row from "../../../components/row/Row";
import "./home.css";
import { getPageData } from "../../../api/movies";
const HomePage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getPageData().then((res) => setData(res));
  }, []);
  console.log(data);
  return (
    <main>
      <Row title="NETFLIX ORIGINALS" data={data?.netflixOriginals.results} />
      <Row title="trending now" data={data?.trendingNow.results} />
      <Row title="topRated" data={data?.topRated.results} />
      <Row title="actionMovies" data={data?.actionMovies.results} />
      <Row title="comedyMoives" data={data?.comedyMoives.results} />
      <Row title="horrorMovies" data={data?.horrorMovies.results} />
      <Row title="romanceMovies" data={data?.romanceMovies.results} />
      <Row title="warMovies" data={data?.warMovies.results} />
      <Row
        title="scienceFictionMovies"
        data={data?.scienceFictionMovies.results}
      />
      <Row title="documentaries" data={data?.documentaries.results} />
    </main>
  );
};

export default HomePage;
