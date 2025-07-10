import React, { Component } from "react";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    
// Log the error details (you can send this to a logging service)
   console.error("Error caught by boundary:", error, errorInfo);
 }
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later....</h2>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;