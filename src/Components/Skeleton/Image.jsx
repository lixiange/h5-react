import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./skeleton.module.scss";
let cx = classNames.bind(styles);

export default function ProductItem(props) {
  const { imgUrl } = props;
  const [imgLoadDone, setImgLoadState] = useState(false);
  const img = new Image();
  img.src = imgUrl;
  img.onload = function () {
    setTimeout(()=>{
      setImgLoadState(true);
    },1000)
  };
  return (
    <div className={cx("skeleton-img")}>
      {imgLoadDone ? (
        <div className={cx("content-box")}>{props.children}</div>
      ) : (
        <div className={cx("loading")}></div>
      )}
    </div>
  );
}
