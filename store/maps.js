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
      title: "Amendment 1",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4230.html",
    },
    {
      title: "Amendment 2",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4231.html",
    },
    {
      title: "Amendment 3",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4233.html",
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
    {
      title: "House D8",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4191.html",
    },
    {
      title: "House D9",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4192.html",
    },
    {
      title: "House D10",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4193.html",
    },
    {
      title: "House D11",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4194.html",
    },
    {
      title: "House D12",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4195.html",
    },
    {
      title: "House D13",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4205.html",
    },
    {
      title: "House D14",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4207.html",
    },
    {
      title: "House D15",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4210.html",
    },
    {
      title: "House D16",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4212.html",
    },
    {
      title: "House D17",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4215.html",
    },
    {
      title: "House D18",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4216.html",
    },
    {
      title: "House D21",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4220.html",
    },
    {
      title: "House D22",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4222.html",
    },
    {
      title: "House D23",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4223.html",
    },
    {
      title: "House D24",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4224.html",
    },
    {
      title: "House D26",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4226.html",
    },
    {
      title: "House D27",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4228.html",
    },
    {
      title: "House D28",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4229.html",
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
