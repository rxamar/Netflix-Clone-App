import React from "react";
import "./input.css";
const Input = ({ label, bg, placeholder, value, type, onchange }) => {
	return (
		<div className="parent">
			<input
				className={`${bg || ""}`}
				type={type}
				placeholder={placeholder || ""}
				value={value || ""}
				onChange={onchange}
			/>
			{label && <label>{label}</label>}
		</div>
	);
};

export default Input;
