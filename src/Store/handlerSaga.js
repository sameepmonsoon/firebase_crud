import { call, put } from "redux-saga/effects";
import { requestGetUser } from "./requestSaga";
import { setUser } from "./user";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    console.log(data);
    yield put(setUser(data));
  } catch (err) {
    console.log(err);
  }
}
