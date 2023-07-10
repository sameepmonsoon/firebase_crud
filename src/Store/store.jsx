import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authSliceReducer from "./authSlice";
import userReducer from "./user";
import { watcherSaga } from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: { auth: authSliceReducer, user: userReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watcherSaga);
