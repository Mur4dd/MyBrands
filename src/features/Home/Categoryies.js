import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TakeBrands, TakeCategories } from './Datafetch';

// Async thunks for fetching data
export const fetchCategories = createAsyncThunk(
  'home/fetchCategories',
  async () => {
    const categories = await TakeCategories();
    return categories;
  }
);

export const fetchBrands = createAsyncThunk(
  'home/fetchBrands',
  async () => {
    const brands = await TakeBrands();
    return brands;
  }
);

const initialState = {
  ActiveCategory: null,
  AllCategories: [],
  Brands: [],
  menu: false,
  status: 'idle',
  error: null
};

export const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    ActiveCategory: (state, action) => {
      state.ActiveCategory = action.payload;
    },
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.AllCategories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchBrands.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.Brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { ActiveCategory, setMenu } = homeSlice.actions;

export default homeSlice.reducer;
