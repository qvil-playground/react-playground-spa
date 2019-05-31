import React, { Component } from "react";

const ErrorComponent = () => {
  throw new Error();
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    // return this.state.hasError ? <div>Error</div> : this.props.children;
    return this.state.hasError ? <div>Error</div> : <ErrorComponent />;
  }
}

export default ErrorBoundary;
