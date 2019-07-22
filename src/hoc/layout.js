import React, { Component } from "react";
import Header from "../components/Header_footer/Header/index.js";
import Footer from "../components/Header_footer/Footer/index.js";

class Layout extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <div className="page_container">{this.props.children}</div>
        <Footer />
      </>
    );
  }
}

export default Layout;
