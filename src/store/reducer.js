import { fromJS, merge } from "immutable";
import { combineReducers } from "redux";
import config from '../config'

import * as constants from "./constants";
const defaultOption = fromJS({
  isReady: false,
  hasLogin:true,
  redirectMode:config.redirectMode,
  redirectQueryName:config.redirectQueryName
});

function appReducer(oldState = defaultOption, action) {
  let { type, data } = action;
  switch (type) {
    case constants.initData:
      return oldState.merge(fromJS(data));
    case constants.authFail:
        return oldState.merge({isLogin:true});
    case constants.authSuccess:
        return oldState.merge({isLogin:false});
    default:
      return oldState;
  }
}
const createRootReducer = () => combineReducers({
  app:appReducer,
})
export default createRootReducer()
