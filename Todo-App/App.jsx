import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState({});
  const [filter, setFilter] = useState("");
  const [beforeEdit, setBeforeEdit] = useState("");

  const handleChange = (event) => {
    let item = event.target.value;
    setTodo(item);
  };

  function handleSubmit(event) {
    event.preventDefault();
    // let newTodoList = [...todoList]

    // newTodoList.push(todo)
    // setTodoList(newTodoList)

    let isAlreadyThere = Object.keys(todoList).find(
      (i) => i.toUpperCase() == todo.toUpperCase()
    );

    if (isAlreadyThere) {
      alert("Task is already listed below");
      return;
    }
    if (todo !== "") {
      setTodoList((prevTodoList) => ({
        ...prevTodoList,
        [todo]: {
          checkbox: false,
          editable: false,
        },
      }));
      setTodo("");
    }
  }

  const toggleCheckbox = (e) => {
    let key = e.target.nextElementSibling.innerText;
    let temp = { ...todoList };
    temp[key].checkbox = e.target.checked;

    setTodoList(temp);
  };
  const toggleEdit = (e) => {
    let key = e.target.previousElementSibling.innerText;

    let prevState;
    let temp = { ...todoList };
    if (temp[key]) {
      setBeforeEdit(key);
      prevState = temp[key].editable;
      temp[key].editable = !prevState;
    } else {
      temp[key] = { ...temp[beforeEdit] };
      delete temp[beforeEdit];
      temp[key].editable = false;
      temp[key].checkbox = false;
      setBeforeEdit("");
    }

    setTodoList(temp);
  };

  const deleteTodo = (e) => {
    let val = e.target.previousElementSibling.previousElementSibling.innerText;

    if (todoList[val].checkbox) {
      let confirmation = confirm("Are you sure ?");

      if (confirmation) {
        let temp = { ...todoList };
        delete temp[val];
        setTodoList(temp);
      }
    } else {
      alert("Please first complete the task and mark it done ");
    }
  };

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
          Submit
        </button>
      </form>

      {Object.keys(todoList).length == 0 ? (
        <div className="initial">
          <h3>Add something in your todo list :</h3>
        </div>
      ) : (
        <div className="todoContainer">
          <div className="List">
            <input
              type="text"
              id="search"
              placeholder=" search your task"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />

            <h3>Task List:</h3>
          </div>

          {Object.keys(todoList)
            ?.filter((i) => i.toUpperCase().includes(filter.toUpperCase()))
            .map((item, index) => (
              <div key={item + index} className="todos">
                <input
                  className="absolute"
                  type="checkbox"
                  onChange={toggleCheckbox}
                  checked={todoList.item?.checkbox}
                />

                <h4
                  className={`absolute ${
                    todoList[item].editable && "editSpace"
                  }`}
                  suppressContentEditableWarning={true}
                  contentEditable={todoList[item].editable}
                >
                  {" "}
                  {item}{" "}
                </h4>

                <button
                  id="editbtn"
                  className="absolute"
                  type="submit"
                  onClick={toggleEdit}
                >
                  {todoList[item].editable ? "Okk" : "Edit"}
                </button>

                <button
                  id="deletebtn"
                  className="absolute"
                  onClick={deleteTodo}
                >
                  {" "}
                  delete{" "}
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
