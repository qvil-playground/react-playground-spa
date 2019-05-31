import React, { lazy, Suspense, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
const Image = lazy(() => import("./components/Image"));

function App() {
  const [state, setState] = useState({
    isLoaded: false,
    error: false
  });

  const handleClick = name => () => {
    setState({
      ...state,
      [name]: true
    });
  };

  return (
    <div>
      <h1>React Playground SPA</h1>
      <h2>React.lazy: Code-Splitting with Suspense</h2>
      {!state.isLoaded ? (
        <button onClick={handleClick("isLoaded")}>Load Image</button>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Image />
        </Suspense>
      )}
      {!state.error ? (
        <button onClick={handleClick("error")}>Load Error</button>
      ) : (
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Image />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
}

export default App;
