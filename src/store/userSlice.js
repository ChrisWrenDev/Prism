import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
    name: "",
    genres: [],
    watched: [],
    watchList: [],
    options: {
      type: "movie",
      trending: true,
      topRated: true,
      genres: true,
      watched: true,
      watchList: true,
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
      state.genres.push(action.payload);
    },
    updateWatched(state, action) {
      state.watched.push(action.payload);
    },
    updateWatchList(state, action) {
      state.watchList.push(action.payload);
    },
    updateOptions(state, action) {
      state.options[action.option] = action.status;
    },
  },
});

export const {
  login,
  logout,
  updateGenres,
  updateWatched,
  updateWatchList,
  updateOptions,
} = userSlice.actions;

// export const userId = (state) => state.user.userId;

// export const userName = (state) => state.user.name;

// export const userGenres = (state) => state.user.genres;

// export const userWatched = (state) => state.user.watched;

// export const userWatchList = (state) => state.user.watchList;

// export const userOptions = (state) => state.user.options;

export default userSlice.reducer;
