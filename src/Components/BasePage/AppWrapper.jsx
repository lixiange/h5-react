import React, { Component } from "react";
import { Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ErrorBoundary from "../ErrorBoundaries";
import * as actionCreators from "../../store/actionCreators";
import RouterWrapper from "./RouterWrapper";
import getRedirectPath from "./getRedirectPath";
import wechatAuthHOC from "../../hocs/wechatAuthorization";

@wechatAuthHOC
class BasePage extends Component {
  componentDidMount() {
    this.props.initApp({ userId: this.props.openid });
  }
  render() {
    const { isReady, redirectMode, redirectQueryName } = this.props;
    const redirectPath = getRedirectPath(redirectQueryName);
    console.log(redirectPath);
    if (isReady) {
      return (
        <RouterWrapper>
          <ErrorBoundary>
            <Switch>
              {this.props.children}
              {/* 在 hashRouter 下为了实现微信分享功能需要开启重定向模式  */}
              {redirectMode && redirectPath && (
                <Redirect from="/" to={redirectPath} />
              )}
            </Switch>
          </ErrorBoundary>
        </RouterWrapper>
      );
    }
    return null;
  }
}
const mapStateToProps = (state) => {
  return {
    isReady: state.app.get("isReady"),
    redirectMode: state.app.get("redirectMode"),
    redirectQueryName: state.app.get("redirectQueryName"),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initApp: function (data) {
      dispatch(actionCreators.initApp(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BasePage);
