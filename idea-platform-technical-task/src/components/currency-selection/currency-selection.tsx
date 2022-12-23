import React, { FC, useState } from "react";
import "./currency-selection.css";

const CurrencySelection: FC = () => {
	const [clickButton, setClickButton] = useState({
		left: true,
		center: false,
		right: false,
	});

	return (
		<div className="currency-selection">
			<button
				onClick={() => setClickButton({ left: true, center: false, right: false })}
				className={`currency-selection-button left  ${
					clickButton.left ? "active" : "hover"
				}`}
			>
				RUB
			</button>
			<button
				onClick={() => setClickButton({ left: false, center: true, right: false })}
				className={`currency-selection-button   ${
					clickButton.center ? "active" : "hover"
				}`}
			>
				USD
			</button>
			<button
				onClick={() => setClickButton({ left: false, center: false, right: true })}
				className={`currency-selection-button  right ${
					clickButton.right ? "active" : "hover"
				}`}
			>
				EUR
			</button>
		</div>
	);
};

export default CurrencySelection;
