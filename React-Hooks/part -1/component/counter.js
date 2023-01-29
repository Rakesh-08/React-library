import { useState, useEffect } from "react";
import "./counter.css";

export default function Counter() {
  //top level management rule of react hooks
  // react hooks to be used inside the react function component

  // const [state,setState] = useState();

  const [count, setCount] = useState(0);

  // when you pass an empty dependency array,,similar to component didmount case in class based component

  //  useEffect(()=>{
  //   console.log('didMount only run once')
  //     },[])

  //     // when you pass data in dependency array,,similar to component didupdate case in class based component
  //   useEffect(()=>{
  //     console.log('didupdate run every time you update the state')
  //       },[count])

  // when you pass return function (clean Up fun),, similar to component willunmount case in class based component
  useEffect(() => {
    console.log("willUnmount being called");

    return console.log("it will run just before the component unmount");
  }, []);

  return (
    <div>
      <h1> counter : {count} </h1>
      <button onClick={() => setCount(count + 1)}> increment </button>
    </div>
  );
}
