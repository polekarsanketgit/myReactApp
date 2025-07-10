import React, { useEffect } from 'react'; // Import React and useEffect hook
import eventBus from './eventBus'; // Import the custom event bus for cross-component communication

/**
 * ComponentB listens for events emitted by other components
 * using the eventBus pattern for communication
 */
function ComponentB() {
  // useEffect runs after component renders and handles side effects
  useEffect(() => {
    // Define event handler function that will be called when 'greet' event is emitted
    const handleGreet = (message) => {
      // Display an alert with the received message
      alert(`Component B received: ${message}`);
    };

    // Subscribe to the 'greet' event on the event bus
    // This allows ComponentB to listen for events from other components
    eventBus.on('greet', handleGreet);

    // Cleanup function that runs when component unmounts
    // This prevents memory leaks by removing the event listener
    return () => {
      eventBus.off('greet', handleGreet);
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  // Render a simple message indicating this component is listening for events
  return <div>Component B is listening...</div>;
}

export default ComponentB; // Export the component for use in other files
