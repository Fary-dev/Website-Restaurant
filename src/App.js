import React from "react";
import "./App.css";
import { constant } from "./Components/Constant/Constant";
import { ThemeProvider } from "styled-components";
import Home from "./Components/Home/Home";

function App() {
  return (
    <ThemeProvider theme={constant}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
