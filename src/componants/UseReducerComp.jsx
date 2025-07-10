import React, { useReducer, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Reducer function
  function counterReducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <>
      <h1>Example of useState and useReducer</h1>
      {/*  example code of useState*/}
      <div>
        <h3>useState Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      {/* example code of useReducer  */}
      <div>
        <h3>useReducer Count: {state.count}</h3>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </>
  );
}

export default Counter;
