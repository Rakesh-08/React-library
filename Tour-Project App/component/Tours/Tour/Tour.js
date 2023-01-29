import { useState } from "react";

function Tour({ id, name, price, image, info, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="singleTour">
      <img src={image} alt={name} />

      <div className="footer">
        <div className="tourInfo">
          <h4>{name}</h4>
          <h4 className="tourPrice"> {price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 180)}....`}
          <button onClick={() => setReadMore(!readMore)}>
            {" "}
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button onClick={() => removeTour(id)} className="deleteBtn">
          {" "}
          Not interested
        </button>
      </div>
    </div>
  );
}
export { Tour };
