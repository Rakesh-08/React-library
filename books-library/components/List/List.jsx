import "./List.css";
import React from "react";
import Card from "./Card/Card";
import "./List.css"

export default function List({ books ,getData,edit }) {
  return (
    <div className="list">
      {books.data?.map((book) => {
        return <Card key={book.id} {...book} getData={getData} edit={edit} />;
      })}
    </div>
  );
}
