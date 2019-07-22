import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="bck_b_light">
        <div className="container">
          <div className="left">
            <div className="logo">Waves</div>
          </div>
          <div className="right">
            <div className="top">LINKs</div>
            <div className="bottom">LINKs</div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
