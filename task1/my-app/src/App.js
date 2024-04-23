import React from "react";
import MainChild from "./component/MainChild";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        <main className="flex flex-1 flex-col items-center justify-center">
          <div className="container mx-auto">
            <MainChild />
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
