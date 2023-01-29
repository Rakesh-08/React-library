import "./styles.css";
import User from "./component/User/User";
import { createContext } from "react";

// react context api;
// 1. create Context

const UserContext = createContext();

export { UserContext };

export default function App() {
  return (
    // 2. wrap the main component from provider component to provide values
    <UserContext.Provider value="Passing the props in provider">
      <User />
    </UserContext.Provider>
  );
}
