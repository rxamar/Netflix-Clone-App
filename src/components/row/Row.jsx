import Carousel from "../carousel/Carousel";
// import List from "./List";
import Card from "./../card/Card";

const Row = ({ title, data }) => {
	return (
		<section>
			{title && <h2 className="section-title">{title}</h2>}
			<Carousel data={data} render={(item) => <Card movie={item} />} />
		</section>
	);
};

export default Row;
