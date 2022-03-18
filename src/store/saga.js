import {
  put,
  takeEvery,
  call,
  takeLeading,
  delay,
  takeLatest,
} from "redux-saga/effects";
import * as constants from "./constants";
import { initData } from "./actionCreators";
import { request } from "../request/api";
import { GetQueryString } from "../utils/util";

function* initApp(action) {
  // 当前用户openId
  const { userId } = action.data;

  // 二维码拥有者的id；通过扫码进入的时候可以获取到该id
  const lid = GetQueryString("lid");

  // 分享人的openId，通过他人分享链接访问时可以获取到该openId；
  const fromOpenid = GetQueryString("fromOpenid");

  yield put(initData({ isReady: true, userId, lid, fromOpenid }));
}
function* rootSaga() {
  yield takeEvery(constants.initApp, initApp);
}

export default rootSaga;
