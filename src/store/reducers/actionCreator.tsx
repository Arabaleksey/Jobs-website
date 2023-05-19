import { createAsyncThunk } from "@reduxjs/toolkit";
import VacanciesService from "../../services/VacanciesService";
import CataloguesService from "../../services/CataloguesService";

export const fetchVacanies = createAsyncThunk(
  "vacancies/fetchSeacrh",
  async ({
    searchValue,
    page,
    totalVacanciesOnPage,
    catalogue,
    paymentFrom,
    paymentTo,
  }: any) => {
    // try {
    const response = await VacanciesService.getAllVacancies(
      searchValue,
      page,
      totalVacanciesOnPage,
      catalogue,
      paymentFrom,
      paymentTo
    );
    return response;
    // } catch (error) {
    //   return thunkAPI.rejectWithValue("Не удалось загрузить вакансии");
    // }
  }
);


export const fetchVacancyById = createAsyncThunk(
  "vacancy/fetchById",
  async ({ vacancyId }: any, thunkAPI: any) => {
    try {
      const response = await VacanciesService.getVacancyById(vacancyId);
      
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "Не удалось получить информацию о вакансии"
      );
    }
  }
);


export const fetchCatalogues = createAsyncThunk(
  "catalogues/fetch",
  async () => {
    // try {
    const response = await CataloguesService.getCatalogues();
    return response;
    // } catch (error) {
    //   return thunkAPI.rejectWithValue("Не удалось загрузить вакансии");
    // }
  }
);


