import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";
import App from "./App";

const rootElement = document.getElementById("root")!;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
      <App />

  </StrictMode>
);
