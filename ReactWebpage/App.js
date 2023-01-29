import "./styles.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import { Footer } from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
