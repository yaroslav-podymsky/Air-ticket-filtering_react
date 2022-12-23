import React, { FC, useEffect, useState } from "react";
import "./input.css";

type TProps = {
	stops: number | string;
	title: string;
	stopsFilter: number[];
	setStopsFilter: (stopsFilter: number[]) => void;
};

const Input: FC<TProps> = ({ stops, title, stopsFilter, setStopsFilter }) => {
	const [checkedInput, setCheckedInput] = useState(false);
	const [isOnly, setIsOnly] = useState(false);

	useEffect(() => {
		if (stopsFilter.length === 0 && typeof stops === "string") {
			setCheckedInput(true);
		} else {
			setCheckedInput(!!stopsFilter.filter((el) => el === stops).length);
		}
	}, [stopsFilter, stops]);

	const filterСhange = () => {
		if (typeof stops === "string") {
			setStopsFilter([]);
		} else if (stopsFilter.includes(stops)) {
			setStopsFilter(stopsFilter.filter((el) => el !== stops));
		} else {
			setStopsFilter([...stopsFilter, stops]);
		}
	};

	return (
		<label
			onMouseLeave={() => setIsOnly(false)}
			onMouseEnter={() => setIsOnly(true)}
			className="input-wrapper"
		>
			<input
				checked={checkedInput}
				onChange={filterСhange}
				className="input"
				type="checkbox"
			/>
			<p className="input-title">{title}</p>
			{stops !== "" && isOnly && (
				<p
					onClick={(e) => {
						e.preventDefault();
						if (typeof stops !== "string") setStopsFilter([stops]);
					}}
					className="input-only"
				>
					только
				</p>
			)}
		</label>
	);
};

export default Input;
