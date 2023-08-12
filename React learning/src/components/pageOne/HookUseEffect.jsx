import React from 'react'
import { useState, useEffect } from 'react'

const HookUseEffect = () => {

    const [count, setCount] = useState(0);
    const [countB, setCountB] = useState(0);
    const [user, setUser] = useState(0);


    // 1 - useEffect - Utilização
    useEffect(() => {
        console.log("Roda a cada Renderização");
    });

    // 2 - useEffect - Array de dependências
    useEffect(() => {
        console.log("Só roda ao incrementar valor!")
    }, [count]);

    // 3 - Quando a página é carregada
    useEffect(() => {
        console.log("Página carregada!")
    }, [])

    // 4 - Clean up function
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(`O incrementador foi alterado ${count} vezes.`);
        }, 2000);

        return () => {
            clearTimeout(timer);
        }
    }, [count])

    // 5 - fetch com useEffect
    useEffect(() => {
        fetch("http://api.github.com/users/matheusbattisti")
            .then((res) => res.json())
            .then((json) => setUser(json))
    }, [])


    return (
        <div className='container-useEffect'>
            <h2 className='container-useEffect__title'>UseEffect</h2>

            <div className='container-useEffect__counters'>
                <div className="container-useEffect__count">
                    <button onClick={() => setCount((prevCount) => prevCount + 1)}>Renderizar</button>
                    <p>{count}</p>
                </div>
                <div className="container-useEffect__countB">
                    <button onClick={() => setCountB((prevCount) => prevCount + 1)}>RenderizarB</button>
                    <p>{countB}</p>
                </div>
            </div>
            <div className="container-useEffect__api-content">
                <p>Dados do usuário:</p>
                <p>{user.name}</p>
            </div>

        </div>
    )
}

export default HookUseEffect