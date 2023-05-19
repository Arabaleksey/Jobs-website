import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchVacancyById } from "./actionCreator";
import { IVacancy } from "../../interfaces/VacancyInterface";

interface VacancyState {
  vacancy: any;
  isLoading: boolean;
  isError: string;
}

const initialState: VacancyState = {
  vacancy: [],
  isLoading: false,
  isError: "",
};

export const vacancyInfoSlice = createSlice({
  name: "vacancy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchVacancyById.fulfilled,
      (state, action: PayloadAction<IVacancy[]>) => {
        state.isError = "";
        state.isLoading = false;
        state.vacancy = action.payload || [];
      }
    );
    builder.addCase(fetchVacancyById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchVacancyById.rejected,
      (state, action: PayloadAction<string | any>) => {
        state.isError = action.payload;
        state.isLoading = false;
      }
    );
  },
});

export default vacancyInfoSlice.reducer;
