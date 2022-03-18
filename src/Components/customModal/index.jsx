import React, { Component } from "react";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    };
  }
  componentDidMount() {
    const scrollY = window.scrollY;
    this.setState({
      scrollY
    });
    document.body.style.position = "fixed";
    document.body.style.top = scrollY;
  }
  componentWillUnmount() {
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, this.state.scrollY);
  }
  render() {
    return <div></div>;
  }
}
