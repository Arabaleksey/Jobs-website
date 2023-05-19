import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IVacancy } from "../../interfaces/VacancyInterface";
import { LOCAL_STORAGE_VALUES } from "../../constants/LocalStorageValues";

interface FavouriteVacancyState {
  favouriteVacancies: IVacancy[];
  
}

const initialState: FavouriteVacancyState = {
  favouriteVacancies:JSON.parse(localStorage.getItem(LOCAL_STORAGE_VALUES.VACANCIES) as string) || [],
};

export const vacanciesFavouriteSlice = createSlice({
  name: "favouriteVacancies",
  initialState,
  reducers: {
    deleteChekedVacancy(state, action: PayloadAction<IVacancy>) {
      state.favouriteVacancies = state.favouriteVacancies.filter(
        (favouriteVacancy) => favouriteVacancy.id !== action.payload.id
      );
      localStorage.setItem(
        LOCAL_STORAGE_VALUES.VACANCIES,
        JSON.stringify(state.favouriteVacancies)
      );
    },
    addToFavourites(state, action: PayloadAction<IVacancy>): any {
      if (
        !state.favouriteVacancies.find(
          (favouriteVacancy) => favouriteVacancy.id === action.payload.id
        )
      ) {
        state.favouriteVacancies = [
          action.payload,
          ...state.favouriteVacancies,
        ];
        localStorage.setItem(
          LOCAL_STORAGE_VALUES.VACANCIES,
          JSON.stringify(state.favouriteVacancies)
        );
      }
    },
  },
});

export default vacanciesFavouriteSlice.reducer;
export const { deleteChekedVacancy, addToFavourites } =
  vacanciesFavouriteSlice.actions;
