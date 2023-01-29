// components and property usage  in react

/*
import "./styles.css";

function Welcome({ name, age }) {
  return (
    <h1>
      {" "}
      welcome to the react classes
      {/* { props.name} age: {props.age} }
      {name} age: {age}
    </h1>
  );
}

export default function App() {
  return (
    <div className="App">
      <Welcome name="Rakesh" age={23} />
      <Welcome name="Rahul" age={25} />
      <Welcome name="Ravi" age={24} />
      <Welcome />
    </div>
  );
}
*/



import "./styles.css";
import Greeting from "./Greeting";
import Welcome from "./Welcome";

export default function App() {
  return (
    <div className="App">
      <Welcome />
      <br />
      <Greeting />
    </div>
  );
}




















