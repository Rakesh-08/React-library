import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import ThemeProvider from "./Context/ThemeProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
