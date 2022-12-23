import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import tiketsReducer from "../features/tikets/tiketsSlice";

export const store = configureStore({
	reducer: {
		tiketsState: tiketsReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
