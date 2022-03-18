import html2canvas from "html2canvas";
import _merge from "loadsh/merge";

/**
 *
 * @param {string} name 地址栏参数名称
 */
const GetQueryString = name => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
};
/**
 *
 * @param {Element} ele 需要转换成图片的dom对象
 * @param {object} customOpt 自定义参数
 * @returns {Promise} 通过promise 返回图片地址
 */
const htmlToCanvas = (ele, customOpt) => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  let opt = _merge({ scale: 3 }, customOpt);
  return new Promise((res, rej) => {
    html2canvas(ele, opt)
      .then(canvas => {
        document.body.appendChild(canvas);
        let htmlImg = canvas.toDataURL("image/jpg");
        res(htmlImg);
      })
      .catch(error => {
        rej(error);
      });
  });
};
/**
 * @returns {Object} 返回判断ios，android 系统函数
 */
const clientSystem = () => {
  return {
    isIOS: (() => {
      let u = navigator.userAgent;
      let ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      let iPad = u.indexOf("iPad") > -1;
      let iPhone = u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1;
      if (ios || iPad || iPhone) {
        return true;
      } else {
        return false;
      }
    })(),
    isAndroid: (() => {
      let u = navigator.userAgent;
      if (u.indexOf("Android") > -1 || u.indexOf("Adr") > -1) {
        return true;
      } else {
        return false;
      }
    })()
  };
};

/**
 * @description: 获取设备尺寸，文档，内容，滚动 大小等信息
 * @param {}
 * @return {Object} 返回带有获取尺寸对应函数方法的对象
 */
const clientSize = () => {
  return {
    /**
     * 获取可视区域的大小
     */
    //document.body 受margin，padding 的影响
    //body {margin:0,padding:0}时
    //document.documentElement与document.body获取到的值一样
    clientWidth:
      document.documentElement.clientWidth || document.body.clientWidth,
    clientHeight:
      document.documentElement.clientHeight || document.body.clientHeight,
    offsetWidth: document.body.offsetWidth, //包含border的大小
    offsetHeight: document.body.offsetHeight, //包含border的大小

    /**
     * 获取网页全文大小
     */
    scrollWidth:
      document.documentElement.scrollWidth || document.body.scrollWidth,
    scrollHeight:
      document.documentElement.scrollHeight || document.body.scrollHeight,

    /**
     * 获取页面滚动距离
     */
    scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
    scrollLeft: document.documentElement.scrollLeft || document.body.scrollLeft,

    /**
     * 获取桌面窗口大小
     */
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,

    /**
     * 获取浏览器大小
     */
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,

    /**
     * 获取浏览器相对于桌面窗口左上角的距离
     */
    screenTop: window.screenTop || window.screenY,
    screenLeft: window.screenLeft || window.screenX
  };
};

/**
 * @description: 监听屏幕可视区域高度的变化
 * @param {function} 回调函数
 * @return: 无
 */
const onScreenResize = callback => {
  let curClientHeight = clientSize().clientHeight;
  window.onresize = () => {
    let resizeHeight = clientSize().clientHeight;
    if (resizeHeight > curClientHeight) {
      //收起键盘
      callback({ toBigger: true });
    } else {
      //弹起键盘
      callback({ toSmaller: true });
    }
    curClientHeight = resizeHeight;
  };
};

export {
  GetQueryString,
  htmlToCanvas,
  clientSystem,
  clientSize,
  onScreenResize
};
