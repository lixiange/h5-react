import React from "react";
import cookie from "react-cookies";
import config from '../config'

//微信授权，重定向到微信服务器。微信服务器直接重定向到后台地址，后端通过code去微信服务器获取信息后将信息存在后端，然后
//将openid放在cookie中重定向到前端
//前端请求接口时调用getOpenid方法获取openid，如果cookie中没有openid,(openid被清除)就重新调用授权接口

export default function wechatAuthorization(WrappedComponent) {
  return function Comp(props) {
    let openid = cookie.load("openid");
    console.log(openid)
    if (!openid) {
      window.location.href =config.requestConfig.authorizationUrl;
      return null;
    }
    return <WrappedComponent {...props} />;
  };
}
