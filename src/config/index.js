import wechatShareConfig from "./WECHAT_SHARE";
import requestConfig from "./REQUEST_CONFIG";

const config = {
  title: "app",
  defaultWechatShareConfig: wechatShareConfig,
  requestConfig,
  hashRouter: false,
  redirectMode: true,
  redirectQueryName: "path",
  wechatAuthConfig: {
    use: true,
    openidKey: "mpOpenId",
    api:
      "https://kcpapi.intcolon.com/kcp/api/1/wechat/mp/authorize?redirectUrl=",
  },
};
export default config;
