import React from "react";
import { Redirect, Route, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import cofigWechatShare from "./wechatShare";
import TabRoute from "../tabRoute";

function Layout(props) {
  const { hasLogin, wechatShare, tabRoute } = props;
  let match = useRouteMatch();
  const {path}=match
  if (!hasLogin && path !== "/login") {
    return <Redirect to="/login" />;
  }
  // 配置微信分享
  if (typeof wechatShare === "object" && wechatShare !== null) {
    cofigWechatShare(wechatShare);
  }

  // 判断是否有底部导航
  if (tabRoute) {
    return (
      <Route {...props}>
        <TabRoute path={path}>{props.children}</TabRoute>
      </Route>
    );
  }
  return <Route {...props}>{props.children}</Route>;
}

function AppRoute(props) {
  const {exact,path}=props;
  return (
    <Route exact={exact} path={path} >
      <Layout {...props}>{props.children}</Layout>
    </Route>
  );
}

export default connect((state) => ({
  hasLogin: state.app.get("hasLogin"),
}))(AppRoute);
