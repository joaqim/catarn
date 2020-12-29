import React, { Component } from "react";
//import DiceTexture from "./assets/dice_texture-talisman.png";

const styles = {
  dice_container: {
    position: "absolute",
    top: "280px",
    left: "480px",
    justifyContent: "center",
    alignItems: "center",
    perspective: "500px",
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    KhtmlUserSelect: "none",
    MozUserSelect: "none",
    MsUserSelect: "none",
    userSelect: "none",
  },
  dice: {
    position: "absolute",
    zIndex: "1",
    marginLeft: "auto",
    marginTop: "auto",
    transformStyle: "preserve-3d",
    transformOrigin: "center",
    width: "60px",
    height: "60px",
  },
  dice___div: {
    height: "60px",
    width: "60px",
    position: "absolute",
    background: "#776522",
    borderColor: "#111",
    border: "1px solid",
    WebkitBackgroundClip: "padding-box",
    backgroundClip: "padding-box",
    boxShadow: "0px 0px 0px 2px rgba(85, 51, 17, 0.8)",
    borderRadius: "8px",
    //backgroundImage: "url(./assets/dice_texture-marble1.jpg)",
    backgroundSize: "100px",
  },
  dice_span: {
    width: "8px",
    height: "8px",
    background: "#222",
    borderRadius: "50%",
    borderColor: "#000",
    display: "block",
    position: "absolute",
    WebkitFilter: "drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.75))",
    MozFilter: "drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.75))",
    MsFilter: "drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.75))",
    OFilter: "drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.75))",
    filter: "drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.75))",
  },
  dice__front: { transform: "rotateY(0deg) translateZ(30px)" },
  dice__front_span_nth_child_1: { top: "10px", left: "12px" },
  dice__front_span_nth_child_2: { top: "10px", right: "12px" },
  dice__front_span_nth_child_3: { top: "26px", left: "12px" },
  dice__front_span_nth_child_4: { top: "26px", right: "12px" },
  dice__front_span_nth_child_5: { bottom: "10px", left: "12px" },
  dice__front_span_nth_child_6: { bottom: "10px", right: "12px" },
  dice__back: { transform: "rotateX(180deg) translateZ(30px)" },
  dice__back_img: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "4px",
    width: "45px",
    height: "45px",
  },
  dice__back_span: { top: "26px", left: "26px" },
  dice__right: { transform: "rotateY(90deg) translateZ(30px)" },
  dice__right_span_nth_child_1: { top: "12px", left: "12px" },
  dice__right_span_nth_child_2: { top: "12px", right: "12px" },
  dice__right_span_nth_child_3: { top: "26px", left: "26px" },
  dice__right_span_nth_child_4: { bottom: "12px", left: "12px" },
  dice__right_span_nth_child_5: { bottom: "12px", right: "12px" },
  dice__left: { transform: "rotateY(-90deg) translateZ(30px)" },
  dice__left_span_nth_child_1: { top: "12px", right: "12px" },
  dice__left_span_nth_child_2: { bottom: "12px", left: "12px" },
  dice__top: { transform: "rotateX(90deg) translateZ(30px)" },
  dice__top_span_nth_child_1: { top: "12px", right: "12px" },
  dice__top_span_nth_child_2: { bottom: "12px", left: "12px" },
  dice__top_span_nth_child_3: { bottom: "26px", left: "26px" },
  dice__bottom: { transform: "rotateX(-90deg) translateZ(30px)" },
  dice__bottom_span_nth_child_1: { top: "12px", right: "12px" },
  dice__bottom_span_nth_child_2: { top: "12px", left: "12px" },
  dice__bottom_span_nth_child_3: { bottom: "12px", left: "12px" },
  dice__bottom_span_nth_child_4: { bottom: "12px", right: "12px" },
  button: {
    position: "fixed",
    bottom: "20px",
    background: "#f76939",
    padding: "20px 40px",
    borderRadius: "4px",
    color: "#fff",
    cursor: "pointer",
  },
  button_hover: { background: "#f76939" },
};

class Dice extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dice-container" style={styles["dice_container"]}>
        <div
          className="dice"
          style={{ ...styles["dice"], ...this.props.style }}
        >
          <div
            className="front"
            style={{ ...styles["dice__front"], ...styles["dice___div"] }}
          >
            <span
              style={{
                ...styles["dice__front_span_nth_child_1"],
                ...styles["dice_span"],
              }}
            />
            <span
              style={{
                ...styles["dice__front_span_nth_child_2"],
                ...styles["dice_span"],
              }}
            />
            <span
              style={{
                ...styles["dice__front_span_nth_child_3"],
                ...styles["dice_span"],
              }}
            />
            <span
              style={{
                ...styles["dice__front_span_nth_child_4"],
                ...styles["dice_span"],
              }}
            />
            <span
              style={{
                ...styles["dice__front_span_nth_child_5"],
                ...styles["dice_span"],
              }}
            />
            <span
              style={{
                ...styles["dice__front_span_nth_child_6"],
                ...styles["dice_span"],
              }}
            />
          </div>
          <div
            className="back"
            style={{ ...styles["dice__back"], ...styles["dice___div"] }}
          >
            {/*<img src={DiceTexture} alt="" styles={styles["dice__back_img"]} />*/}
            <span
              style={{
                ...styles["dice__back_span"],
                ...styles["dice_span"],
              }}
            />
          </div>
          <div
            className="right"
            style={{ ...styles["dice__right"], ...styles["dice___div"] }}
          >
            <span
              style={{
                ...styles["dice__right_span_nth_child_1"],
                ...styles["dice_span"],
              }}
            />
            <span
              style={{
                ...styles["dice__right_span_nth_child_2"],
                ...styles["dice_span"],
              }}
            />
            <span
              style={{
                ...styles["dice__right_span_nth_child_3"],
                ...styles["dice_span"],
              }}
            />
            <span
              style={{
                ...styles["dice__right_span_nth_child_4"],
                ...styles["dice_span"],
              }}
            />
            <span
              style={{
                ...styles["dice__right_span_nth_child_5"],
                ...styles["dice_span"],
              }}
            />
          </div>
          <div
            className="left"
            style={{ ...styles["dice__left"], ...styles["dice___div"] }}
          >
            <span
              style={{
                ...styles["dice__left_span_nth_child_1"],
                ...styles["dice_span"],
              }}
            />
            <span
              style={{
                ...styles["dice__left_span_nth_child_2"],
                ...styles["dice_span"],
              }}
            />
          </div>
          <div
            className="top"
            style={{ ...styles["dice__top"], ...styles["dice___div"] }}
          >
            <span
              style={{
                ...styles["dice__top_span_nth_child_1"],
                ...styles["dice_span"],
              }}
            />
            <span
              style={{
                ...styles["dice__top_span_nth_child_2"],
                ...styles["dice_span"],
              }}
            />
            <span
              style={{
                ...styles["dice__top_span_nth_child_3"],
                ...styles["dice_span"],
              }}
            />
          </div>
          <div
            className="bottom"
            style={{ ...styles["dice__bottom"], ...styles["dice___div"] }}
          >
            <span
              style={{
                ...styles["dice__bottom_span_nth_child_1"],
                ...styles["dice_span"],
              }}
            />
            <span
              style={{
                ...styles["dice__bottom_span_nth_child_2"],
                ...styles["dice_span"],
              }}
            />
            <span
              style={{
                ...styles["dice__bottom_span_nth_child_3"],
                ...styles["dice_span"],
              }}
            />
            <span
              style={{
                ...styles["dice__bottom_span_nth_child_4"],
                ...styles["dice_span"],
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dice;
