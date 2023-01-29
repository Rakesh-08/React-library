import "./Topic.css";

function Topic({ title, img, description }) {
  return (
    <div className="topicContainer">
      <img src={img} alt="codingImage" />
      <h2>{title}</h2>
      <p> {description}</p>
    </div>
  );
}

export { Topic };
