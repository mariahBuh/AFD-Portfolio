import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Project {
  liveUrl: string;
  id: string;
  title: string;
  tech: string;
  image: string;
  description: string;
}

interface ProjectsState {
  items: Project[];
  filtered: Project[];
  selectedTech: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProjectsState = {
  items: [],
  filtered: [],
  selectedTech: "All",
  status: "idle",
  error: null,
};

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await fetch("/data/projects.json");

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    return (await response.json()) as Project[];
  }
);


const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    filterByTech(state, action: PayloadAction<string>) {
      state.selectedTech = action.payload;

      state.filtered =
        action.payload === "All"
          ? state.items
          : state.items.filter(
              (project) => project.tech === action.payload
            );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.filtered = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});


export const { filterByTech } = projectsSlice.actions;
export default projectsSlice.reducer;


