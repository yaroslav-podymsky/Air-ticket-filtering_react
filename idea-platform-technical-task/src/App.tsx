import React from "react";
import "./App.css";
import "./global.css";
import airplaneIcon from "./img/airplaneIcon.png";
import TicketIssuePage from "./components/ticket-issue-page/ticket-issue-page";

function App() {
	return (
		<div className="app">
			<img src={airplaneIcon} width={60} alt="" />
			<TicketIssuePage />
		</div>
	);
}

export default App;
