import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maps: [
    {
      title: "Governor",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4185.html",
    },
    {
      title: "Senate",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4025.html",
    },
    {
      title: "House D1",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4225.html",
    },
    {
      title: "House D2",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4187.html",
    },
    {
      title: "House D3",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4186.html",
    },
    {
      title: "House D4",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4188.html",
    },
    {
      title: "House D6",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4189.html",
    },
    {
      title: "House D7",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4190.html",
    },
  ],
  selectedMap: {
    title: "Governor",
    widget:
      "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4185.html",
  },
};

const mapsSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {
    selectMap(state, action) {
      const targetMap = state.maps.find((map) => map.title === action.payload);
      if (!targetMap) return;
      state.selectedMap = targetMap;
    },
  },
});

export const mapsActions = mapsSlice.actions;
export default mapsSlice.reducer;
