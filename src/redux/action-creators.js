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
      titleTrack: "",
      authorTrack: "",
      idTrack: "",
      MusicData: "",
      MusicDataShuffle: "",
    },
  },
  reducers: {
    setIdTrack: (state, action) => {
      state.trackData = {
        ...state.trackData,
        idTrack: action.payload,
      };
    },
    setMusicData: (state, action) => {
      state.trackData = {
        ...state.trackData,
        MusicData: action.payload,
      };
    },
    setMusicDataShuffle: (state, action) => {
      state.trackData = {
        ...state.trackData,
        MusicDataShuffle: action.payload,
      };
    },
  },
});

export const { setAuthor, setYear, setGenre } = filtersSlice.actions;
export const { setIdTrack, setMusicData, setMusicDataShuffle } =
  trackSlice.actions;
