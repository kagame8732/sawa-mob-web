import { createSlice } from "@reduxjs/toolkit";
import { reducer as user } from "../pages/Signin/store/index";

const state = {
  selectedLesson:{},
  selectedCourse:{},
};

const { reducer: resources, actions } = createSlice({
  name: "resources",
  initialState: state,
  reducers: {
    setSelectedLesson: (state, { payload }) => {
      state.selectedLesson = payload;
    },
    setSelectedCourse: (state, { payload }) => {
      state.selectedCourse = payload;
    },
    
  },
});

export const {setSelectedLesson,setSelectedCourse} = actions;
const reducers = {
  user,
  resources,
};

export default reducers;
 