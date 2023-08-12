import { useState, useCallback } from "react";

const HookUseCallback = () => {
  const [text, setText] = useState("");

  const onChangeText = useCallback((event) => {
    setText(event.target.value);
  }, []);

  return (
    <div className="container-useCallback">
      <h2 className="container-useCallback__title">useCallback</h2>
      <input value={text} onChange={onChangeText} />
    </div>
  );
};

export default HookUseCallback;
