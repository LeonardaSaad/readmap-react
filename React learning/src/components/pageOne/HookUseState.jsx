import React from 'react'
import { useState } from 'react'

const HookUseState = () => {
    const [name, setName] = useState("Matheus");
    const [number, setNumber] = useState(1);
    console.log(name)

    const changeNumber = () => {
        setNumber((prevNumber) => prevNumber + 1)
    }

    return (
        <div className='container-useState'>
            <h2 className='container-useState__title'>useState</h2>
            <h2 className='container-useState__content-name'>Meu nome é: {name}</h2>
            <input
                className='container-useState__input-name'
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <div>
                <p className='container-useState__content-number'>Número: {number}</p>
                <button className="container-useState__button-changeNumber" onClick={changeNumber}>Mudar número!</button>
            </div>
        </div>
    )
}

export default HookUseState