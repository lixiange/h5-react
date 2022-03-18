import React, { Component } from "react";

export default function wechatAuthorization(WrappedComponent) {
  return class Layout extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
