import React from "react";
import NewForm from "./component/NewForm";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        <main className="flex flex-1 flex-col items-center justify-center">
          <NewForm />
        </main>
      </div>
    </>
  );
};

export default App;
