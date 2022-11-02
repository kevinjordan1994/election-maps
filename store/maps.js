import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maps: [
    {
      title: "Governor",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4185.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6801.html",
    },
    {
      title: "Senate",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4025.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6803.html",
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
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6804.html",
    },
    {
      title: "Amendment 2",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4231.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6805.html",
    },
    {
      title: "Amendment 3",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4233.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6806.html",
    },
    {
      title: "House D1",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4225.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6808.html",
    },
    {
      title: "House D2",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4187.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6810.html",
    },
    {
      title: "House D3",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4186.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6811.html",
    },
    {
      title: "House D4",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4188.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6812.html",
    },
    {
      title: "House D6",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4189.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6813.html",
    },
    {
      title: "House D7",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4190.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6814.html",
    },
    {
      title: "House D8",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4191.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6815.html",
    },
    {
      title: "House D9",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4192.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6817.html",
    },
    {
      title: "House D10",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4193.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6819.html",
    },
    {
      title: "House D11",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4194.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6820.html",
    },
    {
      title: "House D12",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4195.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6821.html",
    },
    {
      title: "House D13",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4205.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6822.html",
    },
    {
      title: "House D14",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4207.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6825.html",
    },
    {
      title: "House D15",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4210.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6826.html",
    },
    {
      title: "House D16",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4212.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6827.html",
    },
    {
      title: "House D17",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4215.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6828.html",
    },
    {
      title: "House D18",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4216.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6832.html",
    },
    {
      title: "House D21",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4220.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6833.html",
    },
    {
      title: "House D22",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4222.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6834.html",
    },
    {
      title: "House D23",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4223.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6835.html",
    },
    {
      title: "House D24",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4224.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6836.html",
    },
    {
      title: "House D26",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4226.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6838.html",
    },
    {
      title: "House D27",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4228.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6840.html",
    },
    {
      title: "House D28",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4229.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6841.html",
    },
    {
      title: "GA Governor",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6726.html",
    },
    {
      title: "GA Senate",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6727.html",
    },
    {
      title: "GA Ballot Measure 1",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6730.html",
    },
    {
      title: "GA Ballot Measure 2",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6842.html",
    },
    {
      title: "GA Referendum A",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6843.html",
    },
    {
      title: "GA Referendum B",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6844.html",
    },
    {
      title: "GA House D1",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6728.html",
    },
  ],
  selectedMap: {
    title: "Governor",
    keyword: "Florida",
    widget:
      "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4185.html",
    bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6801.html",
  },
  filterKeyword: "Florida",
  zoomLevel: "100",
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
    setZoomLevel(state, action) {
      state.zoomLevel = action.payload;
    },
    resetZoomLevel(state) {
      state.zoomLevel = "100";
    },
  },
});

export const mapsActions = mapsSlice.actions;
export default mapsSlice.reducer;
