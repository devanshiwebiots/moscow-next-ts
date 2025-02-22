import ConfigDB from "@/Config/ThemeConfig";
import { createSlice } from "@reduxjs/toolkit";

const default_color = ConfigDB.data.color.primary_color;
const secondary_color = ConfigDB.data.color.secondary_color;

const initialState = {
  layout: "compact-wrapper",
  openCus: false,
  sidebarIconType: "stroke",
  colorBackground1: default_color,
  colorBackground2: secondary_color,
  mix_background_layout:"",
  darkMode: false,
};

const ThemeCustomizerSlice = createSlice({
  name: "ThemeCustomizerSlice",
  initialState,
  reducers: {
    setLayout: (state, action) => {
      state.layout = action.payload;
    },
    setOpenCus: (state, action) => {
      state.openCus = action.payload;
    },
    setColorBackground1: (state, action) => {
      state.colorBackground1 = action.payload;
    },
    setColorBackground2: (state, action) => {
      state.colorBackground2 = action.payload;
    },
    addSidebarLayouts: (state, action) => {
      state.layout = action.payload;
    },
    addSidebarIconType: (state, action) => {
      ConfigDB.data.settings.sidebar.iconType = action.payload;
      state.sidebarIconType = action.payload;
    },
    setMixBackgroundLayout: (state, action) => {
      state.mix_background_layout = action.payload;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
      if (state.darkMode) {
        document.body.classList.remove("light-only");
        document.body.classList.add("dark-only");
      } else {
        document.body.classList.remove("dark-only");
        document.body.classList.add("light-only");
      }
    },
  },
});

export const {setMixBackgroundLayout, setColorBackground2, setColorBackground1, setLayout, setOpenCus, addSidebarLayouts, addSidebarIconType,setDarkMode } = ThemeCustomizerSlice.actions;

export default ThemeCustomizerSlice.reducer;