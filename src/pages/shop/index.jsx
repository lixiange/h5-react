import React, { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";
import classNames from "classnames/bind";
import ProductItem from "./component/ProductItem";
import { getProducts } from "./service";
import ListLoading from "../../Components/ListLoading";
import { ImgSkeleton } from "../../Components/Skeleton";
import mainBanner from "../../static/images/shop_main_banner.png";
import subBanner from "../../static/images/shop_sub_banner.png";
import styles from "./style.module.scss";
let cx = classNames.bind(styles);

export default function Shop(props) {
  const [{ productList, loading }, setProductList] = useState({
    loading: true,
    productList: [],
  });
  const history = useHistory();

  useEffect(() => {
    getProducts().then((res) => {
      setProductList({
        productList: res.data,
        loading: false,
      });
    });
  }, []);

  const handleClickProduct = (pid) => {
    history.push(`/productDetail/${pid}`);
  };

  return (
    <Fragment>
      <div className={cx("main-banner")}>
        <img src={mainBanner} alt="UYN" />
      </div>
      <div className={cx("shop-wrapper")}>
        {productList.map((product, index) => {
          return (
            <Fragment key={product.pid}>
              <div className={cx("product")}>
                <ProductItem {...product} onClick={handleClickProduct} />
              </div>
              {index === 3 && (
                <div className={cx("sub-banner")} key="banner">
                  <img src={subBanner} alt="金佰利" />
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
      <ListLoading loading={loading} />
    </Fragment>
  );
}
