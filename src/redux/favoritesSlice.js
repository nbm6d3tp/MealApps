import {createSlice} from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    value: [],
  },
  reducers: {
    selectAsFavorite: (state, action) => {
      state.value.push(action.payload);
    },
    unselectFavorite: (state, action) => {
      state.value.splice(state.value.indexOf(action.payload), 1);
    },
  },
});

export const selectFavorites = state => state.favorites.value;
export const {selectAsFavorite, unselectFavorite} = favoritesSlice.actions;

export default favoritesSlice.reducer;
