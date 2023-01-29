import {useEffect, useState} from "react"
import { useDispatch } from "react-redux";

import "./App.css";
import GetUserDetails from "./components/GetUserDetails/GetUserDetails";
import { sendUserDetails } from "./features/userSlice";

export default function App() {
  
 const [userDetails,setUserDetails]= useState([]);
 const dispatch = useDispatch();

 useEffect(()=>{

  const getUserDetails=async()=>{

    const response= await fetch('https://jsonplaceholder.typicode.com/users');
    const data= await response.json();

     setUserDetails(data);
     dispatch(sendUserDetails({
      UserList:data
     }))
  }
  getUserDetails();

 },[dispatch])


  return (
    <div className="App">
     <form>
      <label>Name :</label>
      <input  type= 'text'/>
      <label>Email :</label>
      <input  type='email'/>
      {/* <button onClick={LoginFn} type= 'submit'>submit</button> */}
     </form>

     <GetUserDetails userDetails={userDetails}/>
    </div>
  );
}
