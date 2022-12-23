import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import json from "../../json/tickets.json";
export interface ITiket {
	origin: string;
	origin_name: string;
	destination: string;
	destination_name: string;
	departure_date: string;
	departure_time: string;
	arrival_date: string;
	arrival_time: string;
	carrier: string;
	stops: number;
	price: number;
}
export interface TicketsState {
	tikets: ITiket[];
}

const initialState: TicketsState = {
	tikets: json.tickets,
};

export const tiketsSlice = createSlice({
	name: "tiketsState",
	initialState,
	reducers: {},
});

const selectSelf = (state: RootState) => state;

export const tiketsSelector = (filters: number[]) =>
	createSelector(selectSelf, (state: RootState) =>
		state.tiketsState.tikets
			.filter((el) => {
				if (filters.length) {
					return filters.includes(el.stops);
				}
				return true;
			})
			.sort((a, b) => a.price - b.price),
	);
export default tiketsSlice.reducer;
