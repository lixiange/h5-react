import {
  get,
  post
} from './http';
import shareConfig from "../config/WECHAT_SHARE";

/**
 * 请求方法说明
 * @param {function} apiName 外部调用的请求方法名称
 * @param {obj} data 请求参数
 * @param {boolean} isBody 请求参数是否为body格式
 * @param {function} method 请求方式 post||get
 */
/**
 * apiName(data){
 *  return method(url,data,isBody)
 * }
 */
const request = {
  wechatJssdk(data){
    return post(shareConfig.apiUrl,data)
  }
}
export  default request