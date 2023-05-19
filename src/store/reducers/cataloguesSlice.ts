import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCatalogues } from "./actionCreator";

interface CataloguesState {
  catalogues: string[];
  isLoading: boolean;
  isError: string;
}

const initialState: CataloguesState = {
  catalogues: [],
  isLoading: false,
  isError: "",
};

export const cataloguesSlice = createSlice({
  name: "catalogues",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCatalogues.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.isError = "";
        state.isLoading = false;
        state.catalogues = action.payload || [];
      }
    );
    builder.addCase(fetchCatalogues.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchCatalogues.rejected,
      (state, action: PayloadAction<string | any>) => {
        state.isError = action.payload;
        state.isLoading = false;
      }
    );
  },
});

export default cataloguesSlice.reducer;
