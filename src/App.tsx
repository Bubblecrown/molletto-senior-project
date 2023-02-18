import { BrowserRouter, Link } from "react-router-dom";
import TransitionRoute from "./TransitionRoute";
import "./GlobalStyle";
import GlobalStyles from "./GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <TransitionRoute />
    </BrowserRouter>
  );
}

export default App;
