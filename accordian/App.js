import "./styles.css";
import Data from "./Data";
import { useState } from "react";
import SingleQuestion from "./components/SingleQuestion";

export default function App() {
  const [questions, setQuestions] = useState(Data);

  return (
    <main>
      <div className="Container">
        <h3> Question and Answers related to Topics </h3>
        <section className="info">
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </main>
  );
}
