import { configureStore } from "@reduxjs/toolkit";
import vacanciesSlice from "./reducers/vacanciesSlice";
import cataloguesSlice from "./reducers/cataloguesSlice";
import vacancyInfoSlice from "./reducers/vacancyInfoSlice";
import vacanciesFavouriteSlice from "./reducers/favouriteSlice";

export const store = configureStore({
  reducer: {
    vacanciesReducer: vacanciesSlice,
    vacancyInfoReducer: vacancyInfoSlice,
    vacancyFavouriteReducer: vacanciesFavouriteSlice,
    cataloguesReducer: cataloguesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
