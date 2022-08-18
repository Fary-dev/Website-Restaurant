import "./App.css";
import Header from "./Components/Header/Header";
import { constant } from "./Components/Constant/Constant";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={constant}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
