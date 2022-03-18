import wechatShareConfig from "./WECHAT_SHARE";
import requestConfig from "./REQUEST_CONFIG";

const config = {
  title: "app",
  defaultWechatShareConfig: wechatShareConfig,
  requestConfig,
  hashRouter: false,
  redirectMode: true,
  redirectQueryName: "path",
  wechatAuthConfig: { //重定向地址为后台服务器时后台URL
    use: true,
    openidKey: "mpOpenId",
    api:
      "https://kcpapi.intcolon.com/kcp/api/1/wechat/mp/authorize?redirectUrl=",
  },
};
export default config;
