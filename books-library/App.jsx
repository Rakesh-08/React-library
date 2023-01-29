
import "./App.css";
import React from "react";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import List from "./components/List/List";
import AddBooks from "./components/AddBooks/AddBooks";

export const url = "http://localhost:3000/books";

function App() {
  const [books, setBooks] = useState([]);
  const [editForm, setEditForm] = useState(false);


  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await axios.get(url);
    setBooks(data);
  }

  return (
    <div className="App">
      <Nav />
      <div className="app-body">
        <List
          getData={getData}
          books={books}
          edit={{ editForm, setEditForm }}
        />

        {editForm ? (
          <AddBooks
            heading={"Update the book"}
            action={"Edit"}
            getData={getData}
            edit={{ editForm, setEditForm }}
          />
        ) : (
          <AddBooks
            heading={"Add book into library"}
            action={"Add"}
            getData={getData}
              edit={{ editForm, setEditForm }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
