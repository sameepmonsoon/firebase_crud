import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authSliceReducer from "./authSlice";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: { auth: authSliceReducer },
  middleware: [sagaMiddleware],
});
