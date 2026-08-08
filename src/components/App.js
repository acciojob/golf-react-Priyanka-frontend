
import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderBall: false,
      ballPosition: {
        left: "0px"
      }
    };

    // Bind methods so `this` refers to the component
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buttonClickHandler() {
    this.setState({
      renderBall: true
    });
  }

  handleKeyDown(event) {
    if (event.keyCode === 39) {
      this.setState((prevState) => {
        const currentPosition = parseInt(
          prevState.ballPosition.left,
          10
        );

        return {
          ballPosition: {
            left: `${currentPosition + 5}px`
          }
        };
      });
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
            left: this.state.ballPosition.left
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

