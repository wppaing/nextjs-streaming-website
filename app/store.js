import { configureStore } from "@reduxjs/toolkit";

import layoutReducer from "../features/layout/mainSlice";

export default configureStore({
  reducer: {
    layout: layoutReducer,
  },
});
