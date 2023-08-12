import React, { Component } from "react";

export class State extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return <div className="form-state">
            <h2 className="form-state__title">State</h2>
            <div className="form-state__count">
                Count - {this.state.count}
            </div>
            <button 
                className="form-state__button"
                onClick={()=>this.incrementFive()}
                >Incrementar</button>
        </div>;
    }
}

export default State;

{
    /* <div className="form-state">
      <p>Mude o State</p>
    
      <div className="form-state__buttons">
        <button className="form-state__button-true">True</button>
        <button className="form-state__button-false">False</button>
      </div>
    
      <div className="form-state__state">a</div>
    </div>; */
}
