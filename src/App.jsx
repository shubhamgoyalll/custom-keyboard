import "./App.css";
import { useState } from "react";
import Keyboard from "./keyboard/Keyboard";

function App() {
  const [value, setvalue] = useState("");

  const onChange = (e) => {
    setvalue((prev) => prev + e);
  };

  return (
    <div className="App">
      <input onChange={onChange} value={value} />
      <Keyboard keyPressed={onChange} />
    </div>
  );
}

export default App;
