const config = {
  apiBase: "", //请求base地址
  timeout: 6000, //请求超时
  authorizationUrl:
    "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx26eca6409e0ded4c&redirect_uri=http://mp.intcolon.com%2Fweixin%2Fauth%2FcodeToUserInfo&response_type=code&scope=snsapi_userinfo&state=1485872364776554497#wechat_redirect", //微信服务器静默授权地址，重定向地址为后台服务器地址
  errorMsg: {
    network: "", //网络断开提示语
    timeout: "", //请求超时提示语
  },
};
export default config;
