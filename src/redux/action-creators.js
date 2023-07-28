import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    activeFilters: {
      author: null,
      year: null,
      genre: null,
    },
  },
  reducers: {
    setAuthor: (state, action) => {
      state.activeFilters = {
        ...state.activeFilters,
        author: action.payload,
      };
    },
    setYear: (state, action) => {
      state.activeFilters = {
        ...state.activeFilters,
        year: action.payload,
      };
    },
    setGenre: (state, action) => {
      state.activeFilters = {
        ...state.activeFilters,
        genre: action.payload,
      };
    },
  },
});

export const trackSlice = createSlice({
  name: "track",
  initialState: {
    trackData: {
      urlTrack: "",
    },
  },
  reducers: {
    setTrack: (state, action) => {
      state.trackData = {
        ...state.trackData,
        urlTrack: action.payload,
      };
    },
  },
});

export const { setAuthor, setYear, setGenre } = filtersSlice.actions;
export const { setTrack } = trackSlice.actions;
