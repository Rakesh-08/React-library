import axios from "axios";
import { url } from "../../../App";
import "./Card.css";

export default function Card({
  id,
  title,
  author,
  summary,
  genre,
  getData,
  edit,
}) {
  const deleteBook = async () => {
    let confirmation = confirm("Are you sure?");
    if (confirmation) {
      await axios.delete(`${url}/${id}`);
      await getData();
    }
  };

  const updateBook = () => {
    let { editForm, setEditForm } = edit;

    setEditForm(!editForm);
    
  };

  return (
    <div className="card">
      <h4 className="card-title">{title}</h4>
      <div className="card-description">
        <p> Author : {author}</p>
        <p> Genre : {genre}</p>
      </div>
      <p className="card-summary">{summary}</p>
      <div className="card-button">
        <button onClick={updateBook} className="button">
          Edit
        </button>
        <button onClick={deleteBook} className="button">
          Delete
        </button>
      </div>
    </div>
  );
}
