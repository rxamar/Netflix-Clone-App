import React from "react";
import "./button.css";

const Button = ({ bg, size, color, value, rounded, icon, iconProp }) => {
	return (
		<button
			className={`${bg || ""} ${color || ""} ${rounded || ""} ${size || ""} `}
		>
			{value}
			{icon && <div className={`${iconProp || ""}`}>{icon}</div>}
		</button>
	);
};

export default Button;
