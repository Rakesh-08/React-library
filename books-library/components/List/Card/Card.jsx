import axios from "axios";
import { url } from "../../../App";
import "./Card.css";
import AddBooks from "../../AddBooks/AddBooks";


export default function Card({ id,
  title,
  author,
  summary,
  genre,
  getData,
  edit,}) {

  let { editForm, setEditForm } = edit;
  
  const deleteBook = async () => {
    let confirmation = confirm("Are you sure?");
    if (confirmation) {
      await axios.delete(`${url}/${id}`);
      await getData();
    }
  };

  const updateBook = () => {
    let curr = editForm[id];
   setEditForm({...editForm,[id]:!curr})
  };
  

  return (
    <div className={`${editForm[id] && 'update'}`}>
      <div className="card">
        <h4 className="card-title">{title}</h4>
        <div className="card-description">
          <p> Author : {author}</p>
          <p> Genre : {genre}</p>
        </div>
        <p className="card-summary">{summary}</p>
        <div className="card-button">
          <button  onClick={updateBook} className="button" disabled={false}>
            Edit
          </button>
          <button onClick={deleteBook} className="button">
            Delete
          </button>
        </div>
      </div>
      <div>
        {editForm[id] &&
          <AddBooks
            heading={"update the book " }
            action={"Update"}
            getData={getData}
          edit={edit}
          id={id}
          />}
      </div>
    </div>
  );
}
