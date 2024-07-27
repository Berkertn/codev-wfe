import { useState } from "react";
import { types } from "./data";
import "./App.css";
import Header from "./components/Header";
import ActionComp from "./components/ActionComp.jsx";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        {types?.map((type) => (
          <ActionComp key={type.id} type={type} />
        ))}
      </div>
    </div>
  );
}

export default App;
