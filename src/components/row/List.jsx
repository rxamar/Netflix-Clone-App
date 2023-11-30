import React from "react";
import Card from "../card/Card";

const List = ({ data }) => {
	return (
		<ul
			className=""
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(5,1fr)",
			}}
		>
			{data?.map((item) => (
				<Card movie={item} />
			))}
		</ul>
	);
};

export default List;
