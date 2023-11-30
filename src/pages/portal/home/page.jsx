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
    </main>
  );
};

export default HomePage;
