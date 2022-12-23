import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { tiketsSelector } from "../../features/tikets/tiketsSlice";
import CurrencySelection from "../currency-selection/currency-selection";
import InputBlock from "../input-block/input-block";
import Ticket from "../ticket/ticket";
import "./ticket-issue-page.css";

const TicketIssuePage: FC = () => {
	const [stopsFilter, setStopsFilter] = useState<number[]>([]);
	const tickets = useSelector(tiketsSelector(stopsFilter));
	useEffect(() => {}, [stopsFilter]);
	return (
		<div className="ticket-issue-page">
			<div className="ticket-issue-page-filter-block">
				<div className="ticket-issue-page-filter">
					<div className="ticket-issue-page-filter-top-block">
						<p className="ticket-issue-page-filter-subtitle">Валюта</p>
						<CurrencySelection />
						<p className="ticket-issue-page-filter-subtitle">количество пересадок</p>
					</div>
					<InputBlock stopsFilter={stopsFilter} setStopsFilter={setStopsFilter} />
				</div>
			</div>

			<div className="ticket-block">
				{tickets.map((el, index) => {
					return (
						<Ticket index={index} key={`${index} ${el.arrival_date}`} tiket={el} />
					);
				})}
			</div>
		</div>
	);
};

export default TicketIssuePage;
