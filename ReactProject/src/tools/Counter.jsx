import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>{counter}</h2>
      <p>Contagem Functionality</p>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
