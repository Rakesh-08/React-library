import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeProvider from "./Context/ThemeProvider";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
