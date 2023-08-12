import React, { Component } from 'react'

export class CompositionVsInheritance extends Component {
  render() {
    function FancyBorder(props) {
      return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
          {/* <h2 className={'FancyBorder-' + props.color + '__title'}>Composition vs Inheritance</h2> */}
          {props.children}
        </div>
      );
    }

    function WelcomeDialog() {
      return (
        <FancyBorder color="blue">
          <h1 className="Dialog-title">
            Welcome
          </h1>
          <p className="Dialog-message">
            Thank you for visiting our spacecraft!
          </p>
        </FancyBorder>
      );
    }


    return (
      <WelcomeDialog className="welcomeDialog" />
    )
  }
}

export default CompositionVsInheritance