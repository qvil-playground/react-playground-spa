import React, { lazy, Suspense } from "react";
const Image = lazy(() => import("./components/Image"));
// import Image from "./components/Image";

function App() {
  return (
    <div>
      <h1>React Playground SPA</h1>
      <h2>React.lazy: Code-Splitting with Suspense</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Image />
      </Suspense>
      {/* <Image /> */}
    </div>
  );
}

export default App;
