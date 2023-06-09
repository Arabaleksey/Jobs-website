import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchVacanies } from "./actionCreator";
import { IVacancies, IVacancy } from "../../interfaces/VacancyInterface";

interface VacanciesState {
  vacancies: IVacancy[];
  totalVacancies: number;
  isLoading: boolean;
  isError: string;
  catalogue: any;
  paymentFrom: any;
  paymentTo: any;
  keyword: string;
}

const initialState: VacanciesState = {
  vacancies: [],
  totalVacancies: 0,
  isLoading: false,
  isError: "",
  catalogue: "",
  paymentFrom: "",
  paymentTo: "",
  keyword: "",
};

export const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {
    getCatalog(state, action) {
      state.catalogue = action.payload;
    },
    getPaymentFrom(state, action) {
      state.paymentFrom = action.payload;
    },
    getPaymentTo(state, action) {
      state.paymentTo = action.payload;
    },
    getKeyword(state, action) {
      state.keyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchVacanies.fulfilled,
      (state, action: PayloadAction<IVacancies>) => {
        state.isError = "";
        state.isLoading = false;
        state.vacancies = action.payload.objects || [];
        state.totalVacancies = action.payload.total || 0;
      }
    );
    builder.addCase(fetchVacanies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchVacanies.rejected,
      (state, action: PayloadAction<string | any>) => {
        state.isError = action.payload;
        state.isLoading = false;
      }
    );
  },
});

export default vacanciesSlice.reducer;
export const { getCatalog, getPaymentTo, getPaymentFrom, getKeyword } =
  vacanciesSlice.actions;
