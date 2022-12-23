import React, { FC } from "react";
import Input from "../input/input";
import "./input-block.css";
type TProps = {
	stopsFilter: number[];
	setStopsFilter: (stopsFilter: number[]) => void;
};
const InputBlock: FC<TProps> = ({ stopsFilter, setStopsFilter }) => {
	return (
		<div className="input-block">
			<Input
				stops={""}
				stopsFilter={stopsFilter}
				setStopsFilter={setStopsFilter}
				title="Все"
			/>
			<Input
				stops={0}
				stopsFilter={stopsFilter}
				setStopsFilter={setStopsFilter}
				title="Без пересадок"
			/>
			<Input
				stops={1}
				stopsFilter={stopsFilter}
				setStopsFilter={setStopsFilter}
				title="1 пересадка "
			/>
			<Input
				stops={2}
				stopsFilter={stopsFilter}
				setStopsFilter={setStopsFilter}
				title="2 пересадки"
			/>
			<Input
				stops={3}
				stopsFilter={stopsFilter}
				setStopsFilter={setStopsFilter}
				title="3 пересадки"
			/>
		</div>
	);
};

export default InputBlock;
