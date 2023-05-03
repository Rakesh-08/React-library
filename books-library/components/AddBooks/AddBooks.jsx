import axios from "axios";
import { useReducer, useState } from "react";
import { url } from "../../App";
import "./AddBooks.css";
let initialState = {
  title: "",
  author: "",
  genre: "",
  summary: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "title":
      return (state = { ...state, title: action.payload });

    case "author":
      return (state = { ...state, author: action.payload });

    case "genre":
      return (state = { ...state, genre: action.payload });

    case "summary":
      return (state = { ...state, summary: action.payload });
    case "reset":
      return initialState;

    default:
      return state;
  }
};

export default function AddBooks({ getData, heading, action, edit,id }) {
  // const [title, setTitle] = useState('');
  // const [author,setAuthor] = useState("");
  // const [genre ,setGenre] = useState("");
  // const [summary, setSummary] = useState("");

  // console.log(title)

  //     let initialState= {
  //         title: '',
  //         author: '',
  //         genre: '',
  //         summary:''
  //     }

  //   const [book, setBook] = useState(initialState);
  //  console.log(book)

  const [state, dispatch] = useReducer(reducer, initialState);
  const { editForm, setEditForm } = edit;
  
  
 

  const addToLibrary = async (e) => {
    e.preventDefault();

    let newBook = structuredClone({ ...state });
   let curr = editForm[id];
   
    if (!curr) {
      await axios.post(url, newBook);
    } else {
      
     await axios.put(`${url}/${id}`,newBook);
     
      setEditForm({ ...editForm, [id]: !curr });
      
    }
    await getData();

    dispatch({
      type: "reset",
    });
  };

  return (
    <div className="addBooks">
      <h2 className="addBooks-title">{heading}</h2>
      <form>
        <label className="addBooks-label">Title:</label>
        <input
         
          value={state.title}
          onChange={(e) =>
            dispatch({
              type: "title",
              payload: e.target.value,
            })
          }
          className="addBooks-input"
          type="text" required
        />

        <label className="addBooks-label">Author:</label>
        <input
         
          value={state.author}
          onChange={(e) =>
            dispatch({
              type: "author",
              payload: e.target.value,
            })
          }
          className="addBooks-input"
          type="text" required
        />

        <label className="addBooks-label">Genre:</label>
        <input
         
          value={state.genre}
          onChange={(e) =>
            dispatch({
              type: "genre",
              payload: e.target.value,
            })
          }
          className="addBooks-input"
          type="text" required
        />

        <label className="addBooks-label">Summary:</label>
        <input
         
          value={state.summary}
          onChange={(e) =>
            dispatch({
              type: "summary",
              payload: e.target.value,
            })
          }
          className="addBooks-input"
          type="text" required
        />

        <button 
          onClick={addToLibrary}
          className="addBooks-button"
          type="submit"
        >
          {action}
        </button>
      </form>
    </div>
  );
}
