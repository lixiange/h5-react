import { Toast, Modal } from "antd-mobile";
import store from "../store/store";
import {authFail,authSuccess} from '../store/constants'

const alert = Modal.alert;
Toast.config({ duration: 2, mask: true });


/**
 * 处理调用者传过来的自定义回调函数
 * @param {number} curCode 当前的code码 
 * @param {object} extraCallback 包含code ，callback 属性
 */
const commonAction = (curCode, extraCallback) => {
  if (extraCallback) {
    //callback——调用者传过来的自定义回调
    //code——调用者传过来的code码，当curCode===code 时执行callback
    //若没有code吗，表示所有网络异常类型都执行callback
    const { code, callback = () => {} } = extraCallback;
    if (code !== 0 && (!code || code === curCode)) {
      callback();
    }
  }
};

/**
 * 根据code吗返回对应的处理函数
 * @param {number} curCode  
 * @returns {function} 返回对应的异常处理函数
 */
const getErrorEvents = curCode => {
  const events = {
    "500": (message, extraCallback) => {
      commonAction(500, extraCallback);
      Toast.fail(message);
    },
    "700": (message, extraCallback) => {
      commonAction(700, extraCallback);
      store.dispatch({ type: authFail });
      Toast.fail(message);
    },
  
  };
  //错误信息中若没有code码，直接提示异常信息，并执行回调
  if (!curCode) {
    return (message, { callback = () => {} }) => {
      callback();
      Toast.fail(message);
    };
  } else {
    //有code码表示网络请求异常，返回对应code码异常处理方法
    return events[curCode];
  }
};

export default async function dealError(method, params, extraCallback = {}) {
  try {
    const res = await method(params);
    return { error: null, res };
  } catch (error) {
    const errorEvent=getErrorEvents(error.code);
    errorEvent(error.message, extraCallback);
    return { error, res: null };
  }
}
