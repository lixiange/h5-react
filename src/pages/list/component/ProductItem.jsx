import React from 'react'
import classNames from "classnames/bind";
import styles from "./style.module.scss";
let cx = classNames.bind(styles);

export default function ProductItem(props) {
  const {imgUrl,title,price,pid}=props;
  return (
    <div className={cx('product-item')} onClick={()=>{
      props.onClick(pid)
    }}>
      <div className={cx('product-img')}>
        <img src={imgUrl} alt={title}/>
      </div>
      <div className={cx('product-title')}>{title}</div>
      <div className={cx('product--bottom')}>
        <span className={cx('product-price')} >￥{price}</span>
        <span className={cx('product-btn')}>详情</span>
      </div>
    </div>
  )
}
