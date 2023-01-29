import {useRef} from "react"
import { useDispatch } from "react-redux";

import "./App.css";
import GetUserDetails from "./components/GetUserDetails/GetUserDetails";
import { login } from "./features/userSlice";

export default function App() {
  const nameRef= useRef(null);
  const emailRef= useRef (null);
  const dispatch= useDispatch();

  const LoginFn= (e)=>{
    e.preventDefault()

    // User is logged in
    // console.log(nameRef.current.value);
    // console.log(emailRef.current.value);

    // dispatch the user data in redux-store

    let name= nameRef.current.value;
    let email=emailRef.current.value;

    dispatch(login({
      username:name,
      useremail:email
    }))

    nameRef.current.value= null;
    emailRef.current.value = null;
   

  }


  return (
    <div className="App">
     <form>
      <label>Name :</label>
      <input ref={nameRef} type= 'text'/>
      <label>Email :</label>
      <input ref={emailRef} type='email'/>
      <button onClick={LoginFn} type= 'submit'>submit</button>
     </form>

     <GetUserDetails/>
    </div>
  );
}
