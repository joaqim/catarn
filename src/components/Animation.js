import { Component } from "react";

class Animation extends Component {
  state = {
    playing: false,
    timerTime: 0,
    timerStart: 0,
  };

  startAnimation = () => {
    this.setState({
      playing: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      this.setState({ timerTime: Date.now() - this.state.timerStart });
    }, 10);
  };

  stopAnimation = () => {
    this.setState({ playing: false });
    clearInterval(this.timer);
  };

  resetAnimation = () => {
    this.setState({ timerStart: 0, timerTime: 0 });
  };

  render() {
    const { timerTime } = this.state;
    return (
      <>
        <button onClick={this.startAnimation}>Start Animation</button>
        <p>{timerTime}</p>
      </>
    );
  }
}

export default Animation;
