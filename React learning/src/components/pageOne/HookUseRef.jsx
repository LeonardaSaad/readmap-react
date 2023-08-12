import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const HookUseRef = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const numberRef = useRef(0);
  const buttonRef = useRef();
  const oldCountRef = useRef();

  console.log("Renderrizou!");

  useEffect(() => {
    numberRef.current = Math.floor(Math.random() * 10);
  });

  useEffect(() => {
    console.log(buttonRef.current.click())
  }, []);

  useEffect(()=> {
    oldCountRef.current = count;
  }, [count]);

  return (
    <div className="container-useRef">
      <h2 className="container-useRef__title">useRef</h2>

      <div className="container-useRef__main-column">
        <div container-useRef__column>
          <h3 className="container-useRef__count">{count}</h3>
          <button
            ref={buttonRef}
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            Adicionar
          </button>
        </div>

        <div className="container-useRef__column">
          <h3 className="container-useRef__number">{numberRef.current}</h3>
        </div>

        <div className="container-useRef__column">
          <h3 className="container-useRef__oldCount">{oldCountRef.current}</h3>
        </div>
      </div>
    </div>
  );
};

export default HookUseRef;
