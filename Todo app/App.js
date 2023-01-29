import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    let item = event.target.value;
    setTodo(item);
  };

  function handleSubmit(event) {
    event.preventDefault();
    // let newTodoList = [...todoList]

    // newTodoList.push(todo)
    // setTodoList(newTodoList)

    let isAlreadyThere = todoList.find((i) => i === todo);

    if (isAlreadyThere) {
      alert("Task is already listed below");
      return;
    }
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
    setTodo("");
  }

  const CheckedOrNot = (e) => {
    let current = checked;
    setChecked(!current);
  };

  const deleteTodo = (e) => {
    if (checked) {
      let indexToDelete = e.target.parentElement.getAttribute("identity");

      setTodoList((prevTodoList) =>
        prevTodoList.filter((i) => i !== prevTodoList[indexToDelete])
      );
    }
  };
  console.log(checked);
  return (
    <div className="App">
      <div className="AppHeader">
        <h1> To Do </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="todoLabel">What do you want to do today ?</label>
        <br /> <br />
        <input
          onChange={handleChange}
          value={todo}
          className="input"
          type="text"
        />
        <button className="button" type="submit">
          Submit{" "}
        </button>
      </form>
      {todoList.map((todo, index) => (
        <div key={index} identity={index} className="todos">
          <input onClick={CheckedOrNot} type="checkbox" />

          <h4> {todo} </h4>

          <button onClick={deleteTodo}> delete </button>
        </div>
      ))}
    </div>
  );
}
