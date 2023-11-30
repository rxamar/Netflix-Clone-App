import React from "react";
import "./heading.css";

const Content = ({ content, color }) => {
	return <h4 className={`medium-with-bold ${color || ""}`}>{content}</h4>;
};

export default Content;
