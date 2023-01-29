import { useContext } from "react";
import { UserContext } from "../../App.js";

export default function User() {
  return (
    <div>
      <User1 />
      <User2 />
    </div>
  );
}

function User1() {
  const contextValue = useContext(UserContext);
  return (
    //   <UserContext.Consumer>
    //  {(value) => <h2> {value}  from User 1</h2>}
    //  </UserContext.Consumer>

    <h1> {contextValue}</h1>
  );
}
function User2() {
  const contextValue = useContext(UserContext);
  return (
    // <UserContext.Consumer>
    //  {(value) => <h3> {value}  from User 2</h3>}
    //  </UserContext.Consumer>
    <h3> {contextValue}</h3>
  );
}
