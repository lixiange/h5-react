import React from "react";
import config from "../config";
import { GetQueryString } from "../utils/util";

export default function wechatAuthorization(WrappedComponent) {
  const { use, openidKey, api } = config.wechatAuthConfig;
  return function Comp(props){
    const openid = GetQueryString(openidKey);
    if (use && !openid) {
      const href = window.location;
      const origion = href.origin;
      const pathname = href.pathname;
      const search = href.search;
      window.location.href =
        api +
        encodeURIComponent(encodeURIComponent(origion + pathname + search));
      return null;
    }
    localStorage.setItem(openidKey,openid)
    return <WrappedComponent openid={openid}  {...props} />;
  };
}
