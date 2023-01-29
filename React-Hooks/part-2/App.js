import "./styles.css";
import Counter from "./components/Counter.js";
import { useEffect, useState } from "react";

const getuser = () => {
  return fetch("/user.json").then((data) => data.json());
};

export default function App() {
  const [name, setName] = useState();

  const [roles, setRoles] = useState();

  const [roleslist, setRoleslist] = useState();

  useEffect(() => {
    if (name) {
      setRoleslist(Object.keys(roles).filter((item) => roles[item]));
    }
  }, [name, roles]);

  const loadDetails = async () => {
    const data = await getuser();
    setName(data.name);
    setRoles(data.roles);
  };

  // function loadDetails(){
  //   setName('user 1');
  //   setRoles({
  //     editor:true
  //   })
  // }

  return (
    <div className="App">
      {/* <Counter/> */}
      <h1>{JSON.stringify(name)} </h1>
      <h2>{JSON.stringify(roles)} </h2>
      <h3> {JSON.stringify(roleslist)} </h3>
      <button onClick={loadDetails}> Load details </button>
    </div>
  );
}
