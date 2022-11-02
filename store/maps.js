import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maps: [
    {
      title: "Governor",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4185.html",
    },
    {
      title: "Senate",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4025.html",
    },
    {
      title: "National Senate",
      keyword: "National",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/5730.html",
    },
    {
      title: "Amendment 1",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4230.html",
    },
    {
      title: "Amendment 2",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4231.html",
    },
    {
      title: "Amendment 3",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4233.html",
    },
    {
      title: "House D1",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4225.html",
    },
    {
      title: "House D2",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4187.html",
    },
    {
      title: "House D3",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4186.html",
    },
    {
      title: "House D4",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4188.html",
    },
    {
      title: "House D6",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4189.html",
    },
    {
      title: "House D7",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4190.html",
    },
    {
      title: "House D8",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4191.html",
    },
    {
      title: "House D9",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4192.html",
    },
    {
      title: "House D10",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4193.html",
    },
    {
      title: "House D11",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4194.html",
    },
    {
      title: "House D12",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4195.html",
    },
    {
      title: "House D13",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4205.html",
    },
    {
      title: "House D14",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4207.html",
    },
    {
      title: "House D15",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4210.html",
    },
    {
      title: "House D16",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4212.html",
    },
    {
      title: "House D17",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4215.html",
    },
    {
      title: "House D18",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4216.html",
    },
    {
      title: "House D21",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4220.html",
    },
    {
      title: "House D22",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4222.html",
    },
    {
      title: "House D23",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4223.html",
    },
    {
      title: "House D24",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4224.html",
    },
    {
      title: "House D26",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4226.html",
    },
    {
      title: "House D27",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4228.html",
    },
    {
      title: "House D28",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4229.html",
    },
    {
      title: "GA Governor",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6726.html",
    },
  ],
  selectedMap: {
    title: "Governor",
    keyword: "Florida",
    widget:
      "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4185.html",
  },
  filterKeyword: "Florida",
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
    setFilterKeyword(state, action) {
      state.filterKeyword = action.payload;
    },
  },
});

export const mapsActions = mapsSlice.actions;
export default mapsSlice.reducer;
