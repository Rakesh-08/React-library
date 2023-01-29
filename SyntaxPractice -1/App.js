//import react from 'react";

import Navbar from "./navbar";
import Banner from "./banner";
import Cards from "./Cards";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardText from "./CardText";
import Footer from "./Footer";
import Form from "./Form";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container my-5">
        <Banner />
        <CardText />
        <Cards />
        <Form />
        <Footer />
      </div>
    </div>
  );
}
