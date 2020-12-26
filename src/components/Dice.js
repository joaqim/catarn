import React, { Component } from "react";
import DiceTexture from "./assets/dice_texture-talisman.png";
import "./Dice.scss";

class Dice extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dice-container">
        <div className="dice" style={this.props.style}>
          <div className="front">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="back">
            <img src={DiceTexture} />
          </div>
          <div className="right">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="left">
            <span></span>
            <span></span>
          </div>
          <div className="top">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="bottom">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Dice;
