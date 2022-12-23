import React, { FC, useState } from "react";
import logo from "../../img/logo.png";
import airplane from "../../img/airplane.png";
import "./ticket.css";
import { ITiket } from "../../features/tikets/tiketsSlice";
import { endDefinition, formatPrice, getDate } from "../../utils";

type TProps = {
	tiket: ITiket;
	index: number;
};

const Ticket: FC<TProps> = ({ tiket, index }) => {
	const [isAnimate, setIsAnimate] = useState(false);
	setTimeout(() => {
		setIsAnimate(true);
	}, index * 150);

	return (
		<div className="ticket">
			<div className="ticket-block-left">
				<img src={logo} alt="" width={150} />
				<button className="ticket-button">
					Купить <br /> за {formatPrice(tiket.price.toString())} &#8381;
				</button>
			</div>
			<div className="ticket-block-right">
				<div className="ticket-block-right-from">
					<div className="ticket-block-right-time">{tiket.departure_time}</div>
					<div className="ticket-block-right-location">
						{tiket.origin}, {tiket.origin_name}
					</div>
					<div className="ticket-block-right-date">
						{getDate(tiket.departure_date)}
					</div>
				</div>
				<div className="ticket-block-right-transfer">
					{endDefinition(tiket.stops)}
					<div
						className={`ticket-block-right-airplane-line ${
							isAnimate && "ticket-block-right-airplane-line-animate"
						}`}
					></div>
					<img
						className={`ticket-block-right-airplane ${
							isAnimate && "ticket-block-right-airplane-animate"
						}`}
						src={airplane}
						width={15}
						alt=""
					/>
				</div>
				<div className="ticket-block-right-to">
					<div className="ticket-block-right-time">{tiket.arrival_time}</div>
					<div className="ticket-block-right-location">
						{tiket.destination_name}, {tiket.destination}
					</div>
					<div className="ticket-block-right-date">
						{getDate(tiket.arrival_date)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ticket;
