import React, { Component } from 'react'

export class MapAndKey extends Component {
    render() {
        function ListItem(props) {
            return <li>{props.value}</li>
        }

        function NumberList(props) {
            const numbers = props.numbers;
            const listItems = numbers.map((number) =>
                <ListItem key={number.toString()} value={number} />
            )
            return <ul>{listItems}</ul>
        }

        const numbers = [1,2,3,4,5,6];

        return <div className='number-list'>
            <h2 className='number-list__title'>Map And Key</h2>
            <NumberList numbers={numbers} className='number-list__numbers' />
        </div> 
    }
}

export default MapAndKey