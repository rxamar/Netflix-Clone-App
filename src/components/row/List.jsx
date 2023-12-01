import React from "react";
import "./row.css";
import Card from "../card/Card";

const List = ({ data }) => {
	return (
		<ul
			className="rows"
			// style={{
			// 	display: "grid",
			// 	gridTemplateColumns: "repeat(5,1fr)",
			// }}
		>
			{data?.map((item) => (
				<Card movie={item} />
			))}
		</ul>
	);
};

export default List;
