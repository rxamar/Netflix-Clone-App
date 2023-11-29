import React from "react";
import "./heading.css";

const Heading = ({ title, size, color }) => {
	return <h1 className={`${size || ""} ${color || ""}`}>{title}</h1>;
};

export default Heading;
