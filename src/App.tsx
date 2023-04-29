import { BrowserRouter, Link } from "react-router-dom";
import TransitionRoute from "./TransitionRoute";
import "./GlobalStyle";
import GlobalStyles from "./GlobalStyle";
import { Provider, useSelector } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <TransitionRoute />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
