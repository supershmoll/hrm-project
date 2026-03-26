import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async (apiLink) => {
    const response = await fetch(apiLink);
    const data = await response.json();
    return data;
  }
);

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default employeesSlice.reducer;
