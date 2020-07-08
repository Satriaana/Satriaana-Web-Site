import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <kbd> Hey, here are some tutorials ! </kbd>
        </p>

        <a
          className="App-link"
          href="https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 👈
        </a>
      </header>
    </div>
  );
}

export default App;
