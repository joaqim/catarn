import React, { Component } from "react";
import "./Cup.scss";

class Cup extends Component {
  constructor(props) {
    super(props);
    // just an array of [</div> x 16]
    this.state = {
      cup_sides: new Array(16)
        .fill(undefined)
        .map((_side, index) => <div key={index} />),
    };
  }
  render() {
    return (
      <>
        <div className="cup-container">
          <div className="cup" style={this.props.style}>
            {this.state.cup_sides}
            <div className="bottom"></div>
            <div className="bottom-dark"></div>
            <div className="top"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Cup;
