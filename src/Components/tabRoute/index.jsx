import React from "react";
import { Link  } from "react-router-dom";
import classNames from "classnames/bind";
import cart from "../../static/images/tab-icon/cart.png";
import cartWhite from "../../static/images/tab-icon/cart-white.png";
import list from "../../static/images/tab-icon/list.png";
import listWhite from "../../static/images/tab-icon/list-white.png";
import shop from "../../static/images/tab-icon/shop.png";
import shopWhite from "../../static/images/tab-icon/shop-white.png";
import styles from "./style.module.scss";
let cx = classNames.bind(styles);

export default function TabRoute(props) {
  const { path  } = props;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>{props.children}</div>
      <div className={cx("tab-bar")}>
        <Link
          to="/shop"
          replace 
          className={cx({
            "tab-item": true,
            active: path === "/shop",
          })}
        >
          <div className={cx("cover")}></div>
          <div className={cx("item")}>
            <img src={path === "/shop" ? shopWhite : shop} alt="商城" />
            <span>商城</span>
          </div>
        </Link>
        <Link
          to="/cart"
          replace 
          className={cx({
            "tab-item": true,
            active: path === "/cart",
          })}
        >
          <div className={cx("cover")}></div>
          <div className={cx("item")}>
            <img src={path === "/cart" ? cartWhite : cart} alt="购物车" />
            <span>购物车</span>
          </div>
        </Link>
        <Link
          to="/list"
          replace 
          className={cx({
            "tab-item": true,
            active: path === "/list",
          })}
        >
          <div className={cx("cover")}></div>
          <div className={cx("item")}>
            <img src={path === "/list" ? listWhite : list} alt="订单" />
            <span>订单</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
