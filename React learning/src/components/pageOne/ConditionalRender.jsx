import React, { Component } from "react";

export class ConditionalRender extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOffClick = this.handleOffClick.bind(this);
    this.state = {
      buttonState: false
    };
  }

  handleOnClick() {
    this.setState({ buttonState: true });
  }

  handleOffClick() {
    this.setState({ buttonState: false });
  }

  render() {
    const buttonState = this.state.buttonState;
    let content;
    if (buttonState) {
      content = <h1>ON</h1>;
    } else {
      content = <h1>Off</h1>;
    }

    return (
      <div className="conditional-render">
        <h2 className="conditional-render__title">Conditional Render</h2>
        <div className="conditional-render__buttons">
          <button className="btn-positive" onClick={() => this.handleOnClick()}>
            ON
          </button>
          <button
            className="btn-negative"
            onClick={() => this.handleOffClick()}
          >
            OFF
          </button>
        </div>

        <div className="conditional-render__content">{content}</div>
      </div>
    );
  }
}

export default ConditionalRender;
