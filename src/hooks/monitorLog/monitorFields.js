import {GetQueryString} from '../../utils/util'

// lid: "",
// parentOpenId: "",
// openId: "",
// pageUrl: window.location.hash,
// pageDesc: "",
// keyParam: "",
// behavior: "",
// behaviorType: "",
// timeConsuming: "",

export const getFields = () => {
  return {
    lid: GetQueryString("lid"),
    openId: GetQueryString("mpOpenId"),
    parentOpenId: GetQueryString("parentOpenId"),
    pageDesc: "",
    keyParam: "",
    behavior: "",
    behaviorType: "",
    timeConsuming: "",
  };
};

export const behavior = {
  1: "访问页面", //keyparams  当前页面产品id
  2: "点击商品一级分类", //keyparams 点击的分类id
  3: "点击商品二级分类", // keyparams 点击的产品id
  4: "点击加入购物车（商品详情页）", // keyparams 商品id ,behavior 商品信息
  5: "点击立即购买（商品详情页）", // keyparams 商品id ,behavior 商品信息
  6: "记录页面停留时长", // keyparams 商品id

  7:'主推广人分享',
  8:'子推广人分享',
  9:'推广海报访问'
};
