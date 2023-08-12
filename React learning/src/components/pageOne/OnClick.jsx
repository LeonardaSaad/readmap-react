import React, { Component } from 'react';

export class OnClick extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true, theme: "light" };

        // This binding is necessary to make `this` work in the callback    
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }));
        if(this.state.isToggleOn == true) {
            this.setState({theme: "dark"});
        } else {
            this.setState({theme: "light"});
        }
    }


    render() {
        return (
            <div className={"container-onclick container-onclick__theme-" + this.state.theme}>
                <h2 className='container-onclick__title'>OnClick</h2>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

export default OnClick