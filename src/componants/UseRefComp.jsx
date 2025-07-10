import React, { useState, useRef, useEffect } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count; // Update ref after render
  }, [count]);

  const handleFocus = () => {
    inputRef.current.focus(); // Access the DOM node directly
  };

  return (
    <div>
      <h1>Example of useRef</h1>
      <input ref={inputRef} type="text" placeholder="Focus me" />
      <button onClick={handleFocus}>Focus Input</button>

      <h2>Previous Count Example</h2>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseRef;
