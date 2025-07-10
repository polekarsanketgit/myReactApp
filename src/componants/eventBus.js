/**
 * EventBus - A simple pub/sub (publish/subscribe) pattern implementation
 * for communication between React components that aren't directly related
 */
const eventBus = {
  // Storage for all event callbacks, organized by event name
  events: {},

  /**
   * Subscribe to an event
   * @param {string} event - The event name to subscribe to
   * @param {function} callback - The function to call when event is emitted
   */
  on(event, callback) {
    // Create array for this event type if it doesn't exist
    if (!this.events[event]) this.events[event] = [];
    // Add the callback to the event's callback array
    this.events[event].push(callback);
  },

  /**
   * Unsubscribe from an event
   * @param {string} event - The event name to unsubscribe from
   * @param {function} callback - The specific callback to remove
   */
  off(event, callback) {
    // If event doesn't exist, do nothing
    if (!this.events[event]) return;
    // Filter out the specific callback from the event's callback array
    this.events[event] = this.events[event].filter((cb) => cb !== callback);
  },

  /**
   * Emit an event with data
   * @param {string} event - The event name to emit
   * @param {any} data - The data to pass to all subscribers
   */
  emit(event, data) {
    // If event doesn't exist, do nothing
    if (!this.events[event]) return;
    // Call each callback registered for this event with the provided data
    this.events[event].forEach((callback) => callback(data));
  },
};

export default eventBus; // Export for use in components
