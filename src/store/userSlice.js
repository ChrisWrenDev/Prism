import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
    name: "",
    genres: [],
    watched: [],
    watchList: [],
    mediaType: "movie",
    options: {
      trending: true,
      topRated: true,
      genres: true,
      watched: false,
      watchList: false,
    },
  },

  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    updateGenres(state, action) {
      state.genres = action.payload;
    },
    updateWatched(state, action) {
      state.watched.push(action.payload);
    },
    addToWatchList(state, action) {
      state.watchList.push(action.payload);
    },
    removeFromWatchList(state, action) {
      state.watchList.filter((movie) => movie !== action.payload);
    },
    updateOptions(state, action) {
      console.log(action.payload);
      state.options[action.payload.name] = !state.options[action.payload.name];
    },
  },
});

export const {
  login,
  logout,
  updateGenres,
  updateWatched,
  addToWatchList,
  removeFromWatchList,
  updateOptions,
} = userSlice.actions;

// export const userId = (state) => state.user.userId;

// export const userName = (state) => state.user.name;

// export const userGenres = (state) => state.user.genres;

// export const userWatched = (state) => state.user.watched;

// export const userWatchList = (state) => state.user.watchList;

// export const userOptions = (state) => state.user.options;

export default userSlice.reducer;
