import React from "react"; // Import React library
import eventBus from "./eventBus"; // Import the custom event bus for cross-component communication

/**
 * ComponentA emits events that can be received by other components
 * using the eventBus pattern for communication
 */
function ComponentA() {
  // Event handler for button click
  const handleClick = () => {
    // Emit a 'greet' event with a message payload
    // This will be received by any component listening for 'greet' events
    eventBus.emit("greet", "Hello from Component A");
  };

  // Render a heading and button that triggers the event emission when clicked
  return (
    <>
      <h1>Component A</h1>
      <div>Example of eventBus</div>
      <button onClick={handleClick}>Send Greeting to Comp B</button>
    </>
  );
}

export default ComponentA; // Export the component for use in other files
