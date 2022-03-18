import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const authHoc=(WrappedRoute) => {
  return connect((state) => ({
    hasLogin: state.app.get("hasLogin"),
  }))((props) => {
    const { hasLogin } = props;
    const pathName = window.location.pathname;
    const hashName = window.location.hash;
    if (!hasLogin && (pathName !== "/login" || hashName !== "#/login")) {
      return <Redirect to="/login" />;
    }
    return <WrappedRoute {...props} />;
  });
};
export default authHoc