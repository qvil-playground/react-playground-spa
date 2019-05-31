import React, { lazy, Suspense, useState } from "react";
const Image = lazy(() => import("./components/Image"));

function App() {
  const [state, setState] = useState({
    isLoaded: false
  });

  const handleClick = () => {
    setState({
      ...state,
      isLoaded: true
    });
  };
  return (
    <div>
      <h1>React Playground SPA</h1>
      <h2>React.lazy: Code-Splitting with Suspense</h2>
      {!state.isLoaded ? (
        <button onClick={handleClick}>Load Image</button>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <Image />
        </Suspense>
      )}
    </div>
  );
}

export default App;
