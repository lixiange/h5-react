import React, { useState } from "react";
import classNames from "classnames/bind";
import { ImgSkeleton } from "../../../Components/Skeleton";
import styles from "./style.module.scss";
let cx = classNames.bind(styles);

export default function ProductItem(props) {
  const { imgUrl, title, price, pid, onClick = () => {} } = props;
  return (
    <div
      className={cx("product-item")}
      onClick={() => {
        onClick(pid);
      }}
    >
      <div className={cx("prduct-wrapper")}>
        <div className={cx("product-img")}>
          <ImgSkeleton imgUrl={imgUrl}>
            <img  src={imgUrl} alt={title} />
          </ImgSkeleton>
        </div>
        <div className={cx("product-title")}>{title}</div>
        <div className={cx("product--bottom")}>
          <span className={cx("product-price")}>￥{price}</span>
          <span className={cx("product-btn")}>详情</span>
        </div>
      </div>
    </div>
  );
}
