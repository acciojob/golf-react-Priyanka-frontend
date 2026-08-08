import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: {
        left: "0px"
      }
    };

    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler() {
    this.setState({
      renderBall: true
    });
  }

  handleKeyDown(event) {
    if (event.key === "ArrowRight" && event.keyCode === 39) {
      this.setState((prevState) => ({
        ballPosition: {
          left: `${parseInt(prevState.ballPosition.left) + 5}px`
        }
      }));
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return (
        <div
          className="ball"
          style={{
            position: "absolute",
            ...this.state.ballPosition
          }}
        ></div>
      );
    }

    return (
      <button
        className="start"
        onClick={this.buttonClickHandler}
      >
        Start
      </button>
    );
  }

  render() {
    return (
      <div className="playground">
        {this.renderBallOrButton()}
      </div>
    );
  }
}

export default App;
