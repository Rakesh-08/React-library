import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense,lazy } from "react";
import "./App.css";
// import Home from "./Home";
// import About from "./About";

// Routes based code splitting;

const Home = lazy(() => import("./Home"))
const About= lazy(() => import("./About"))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>...Loading</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
