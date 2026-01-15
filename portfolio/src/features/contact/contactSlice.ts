import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ContactState = {
  status: "idle",
  error: null,
};

export const submitContactForm = createAsyncThunk(
  "contact/submit",
  async (data: ContactFormData) => {
    // mock API delay (allowed for assignment)
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return data;
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetStatus(state) {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(submitContactForm.rejected, (state) => {
        state.status = "failed";
        state.error = "Failed to send message";
      });
  },
});

export const { resetStatus } = contactSlice.actions;
export default contactSlice.reducer;
