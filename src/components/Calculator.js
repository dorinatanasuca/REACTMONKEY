import { useState } from "react";

export const CalculatorState = () => {
  const [countState, setCountState] = useState(0);

  const addState = () => {
    setCountState(countState + 1);
  };

  return (
    <>
      <div>
        {countState}
        <br />
        <br />
        <button onClick={addState}>ADD</button>
        <button onClick={() => setCountState(countState - 1)}>REMOVE</button>
        <button
          onClick={() => {
            setCountState((prev) => (prev = 0));
          }}>
          ZERO
        </button>
      </div>
    </>
  );
};
