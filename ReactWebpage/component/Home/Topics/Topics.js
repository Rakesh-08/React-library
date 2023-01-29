import "./Topics.css";
import { Topic } from "./Topic/Topic.js";
function Topics() {
  const topics = [
    {
      title: "Javascript",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSjtynhlJLcf-snjNi9wi5tmQ_ZNZBnqObQ&usqp=CAU",
      description: 'Learn Javascript. The world"s most popular language.',
    },
    {
      title: "React",
      image:
        "data:image/png;base64,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",
      description: 'Learn React. The world"s most popular javascript library.',
    },
    {
      title: "C++",
      image:
        "data:image/png;base64,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",
      description: "Learn C++.",
    },
    {
      title: "DSA",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwAvFCO7m8JKdthQeA8IhmE9TItcrZQZ1iTA&usqp=CAU",
      description: "Learn Data structure Algorithm in javascript.",
    },
  ];

  return (
    <div className="topicsContainer">
      {topics.map((item, index) => (
        <Topic
          title={item.title}
          img={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
}

export { Topics };