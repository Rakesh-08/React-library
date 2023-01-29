import "./Home.css";
import { Topics } from "./Topics/Topics";

function Home() {
  return (
    <div className="homeContainer">
      <div className="homeHeader">
        <h1>
          {" "}
          Education is the key to open the golden door of opportunities.{" "}
        </h1>
      </div>
      <div className="homeBanner">
        <div className="homeBannerLeft">
          <p> Learn to code </p>
          <p> Practice </p>
          <p> Interview Preparation </p>
        </div>
        <div className="homeBannerRight">
          <img
            src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif"
            alt="ProgrammerImage"
          />
        </div>
      </div>
      <div className="homeTopics">
        <Topics />
      </div>
    </div>
  );
}
export { Home };
