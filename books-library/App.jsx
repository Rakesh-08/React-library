
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
  const [editForm, setEditForm] = useState({});


  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const axiosObject = await axios.get(url);
    let editStatus = {};
    setBooks(axiosObject);
    axiosObject.data.map(i => editStatus[i.id] = false);
    setEditForm(editStatus)
    
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


        {!Object.keys(editForm).find(i=>editForm[i]==true) && <AddBooks
          heading={"Add New Book in library"}
          action={"Add"}
          getData={getData}
          edit={{ editForm, setEditForm }}
        />
        }
      </div>
    </div>
  );
}

export default App;
