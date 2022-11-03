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
      title: "U.S. House District 1",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4225.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6808.html",
    },
    {
      title: "U.S. House District 2",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4187.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6810.html",
    },
    {
      title: "U.S. House District 3",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4186.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6811.html",
    },
    {
      title: "U.S. House District 4",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4188.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6812.html",
    },
    {
      title: "U.S. House District 6",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4189.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6813.html",
    },
    {
      title: "U.S. House District 7",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4190.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6814.html",
    },
    {
      title: "U.S. House District 8",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4191.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6815.html",
    },
    {
      title: "U.S. House District 9",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4192.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6817.html",
    },
    {
      title: "U.S. House District 10",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4193.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6819.html",
    },
    {
      title: "U.S. House District 11",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4194.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6820.html",
    },
    {
      title: "U.S. House District 12",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4195.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6821.html",
    },
    {
      title: "U.S. House District 13",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4205.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6822.html",
    },
    {
      title: "U.S. House District 14",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4207.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6825.html",
    },
    {
      title: "U.S. House District 15",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4210.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6826.html",
    },
    {
      title: "U.S. House District 16",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4212.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6827.html",
    },
    {
      title: "U.S. House District 17",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4215.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6828.html",
    },
    {
      title: "U.S. House District 18",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4216.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6832.html",
    },
    {
      title: "U.S. House District 21",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4220.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6833.html",
    },
    {
      title: "U.S. House District 22",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4222.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6834.html",
    },
    {
      title: "U.S. House District 23",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4223.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6835.html",
    },
    {
      title: "U.S. House District 24",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4224.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6836.html",
    },
    {
      title: "U.S. House District 25",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6874.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6837.html",
    },
    {
      title: "U.S. House District 26",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4226.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6838.html",
    },
    {
      title: "U.S. House District 27",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4228.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6840.html",
    },
    {
      title: "U.S. House District 28",
      keyword: "Florida",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/4229.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6841.html",
    },
    {
      title: "Governor ",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6726.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6876.html",
    },
    {
      title: "Senate ",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6727.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6878.html",
    },
    {
      title: "Ballot Measure 1",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6730.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6882.html",
    },
    {
      title: "Ballot Measure 2",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6842.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6883.html",
    },
    {
      title: "Referendum A",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6843.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6880.html",
    },
    {
      title: "Referendum B",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6844.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6881.html",
    },
    {
      title: "U.S. House District 1 ",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6728.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6884.html",
    },
    {
      title: "U.S. House District 2 ",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6845.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6885.html",
    },
    {
      title: "U.S. House District 3 ",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6900.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6887.html",
    },
    {
      title: "U.S. House District 4 ",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6901.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6888.html",
    },
    {
      title: "U.S. House District 5 ",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6902.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6889.html",
    },
    {
      title: "U.S. House District 6 ",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6903.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6894.html",
    },
    {
      title: "U.S. House District 7 ",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6904.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6890.html",
    },
    {
      title: "U.S. House District 8 ",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6905.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6891.html",
    },
    {
      title: "U.S. House District 9 ",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6906.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6895.html",
    },
    {
      title: "U.S. House District 10 ",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6907.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6896.html",
    },
    {
      title: "U.S. House District 11 ",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6909.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6892.html",
    },
    {
      title: "U.S. House District 12 ",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6911.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6897.html",
    },
    {
      title: "U.S. House District 13 ",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6912.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6898.html",
    },
    {
      title: "U.S. House District 14 ",
      keyword: "Georgia",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6913.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6899.html",
    },
    {
      title: "Senate Balance of Power",
      keyword: "National",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/5730.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6875.html",
    },
    {
      title: "House Balance of Power",
      keyword: "National",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6923.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6921.html",
    },
    {
      title: "Governors Balance of Power",
      keyword: "National",
      widget:
        "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6927.html",
      bar: "https://interactives.ap.org/election-results/customers/layouts/organization-layouts/published/77365/6925.html",
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
