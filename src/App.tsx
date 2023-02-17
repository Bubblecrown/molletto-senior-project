import { BrowserRouter, Link } from "react-router-dom";
import TransitionRoute from "./TransitionRoute";
import "./GlobalStyle";
import GlobalStyles from "./GlobalStyle";
const Links = () => (
  <>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </>
);

function App() {
  return (
    <BrowserRouter>
      {/* <Links /> */}
      <GlobalStyles />
      <TransitionRoute />
    </BrowserRouter>
  );
}

export default App;
