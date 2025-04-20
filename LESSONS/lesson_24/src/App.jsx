import { createElement, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const isMoreThanFive = count > 5;

  const styles = {
    backgroundColor: "#f0f0f0",
    padding: "1rem",
    borderRadius: "12px",
    color: "#333",
  };

  const handleLog = () => {
    console.log("Hello world");
  };

  const handleGreet = (name) => {
    console.log(`Hello ${name}!`);
  };

  const handleInput = (e) => {
    console.log("Input value:", e.target.value);
  };

  return (
    <>
      <div style={styles}>Block with nline styles</div>
      <div>
        <button onClick={handleLog}>LOG</button>
        <button onClick={() => handleGreet("Jack")}>Hey</button>

        <div>
          <input type="text" onChange={(e) => handleInput(e)} />
        </div>

        <div>
          <input type="text" onChange={handleInput} />
        </div>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className={`read-the-docs ${isMoreThanFive ? "bigger-text" : ""}`}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
