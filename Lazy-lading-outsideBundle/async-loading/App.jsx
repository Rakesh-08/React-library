import "./App.css";
import { useState, lazy,Suspense } from "react";

// import username from './username';
// import { transformToUppercase } from "./Utils";
//  import DefaultComponent from "./DefaultComponent";

 const DefaultComponent = lazy(() => import("./DefaultComponent"));

function App() {
   const [username, setUsername] = useState();
  

  // const loadData = () => {
    
  //   import("./username").then((module) => {
  //     setUsername(module.default)

  //     import("./Utils" /* webpackChunkName : "utils.js"*/ ).then(({ transformToUppercase }) => {

  //       setUsername(prev => transformToUppercase(prev))
  //     }
  //      )

  //   });

  // };

  const loadData = async () => {
    const users = (await import("./username")).default;

    const transformToUppercase = (
      await import("./Utils" /* webpackChunkName : "utils.js"*/)
    ).transformToUppercase;

    setUsername(transformToUppercase(users));
  };

  return (
    <div className="App">
      <h1>App</h1>
      <h2>{JSON.stringify(username)}</h2>

      <button onClick={loadData}> Load data</button>
      <Suspense fallback={<h1 style={{backgroundColor:"black"}}>...Loading</h1>}>
        <DefaultComponent />
      </Suspense>
    </div>
  );
}

export default App;
