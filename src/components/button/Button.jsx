import React from "react";
import "./button.css";

const Button = ({ bg, size, color, value, rounded, icon, iconProp, type }) => {
	return (
		<button
			className={`${bg || ""} ${color || ""} ${rounded && rounded} ${
				size || ""
			} `}
			type={type || ""}
		>
			{value}
			{icon && <div className={`${iconProp || ""}`}>{icon}</div>}
		</button>
	);
};

export default Button;
