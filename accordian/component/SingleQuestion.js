import { useState } from "react";

export default function SingleQuestion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div>
      <article className="question">
        <header>
          <h4> {title} </h4>
          <button onClick={() => setShowInfo(!showInfo)} className="btn">
            {showInfo ? "-" : "+"}
          </button>
        </header>
        {showInfo && <p className="answer">{info}</p>}
      </article>
    </div>
  );
}
