import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/userSlice";
import "./GetUserDetails.css";

export default function GetUserDetails() {
  const user = useSelector((state) => state.user.user);
  let dispatch= useDispatch()

  const logoutFn=()=>{

    dispatch(logout())
  }

  return (
    <div>
      {!user ? (
        <p className="text">No user found</p>
      ) : (
        <>
          <h1>User : {user.username}</h1>
          <h2>Email : {user.useremail}</h2>
          <button onClick={logoutFn} >Logout</button>
        </>
      )}
    </div>
  );
}
