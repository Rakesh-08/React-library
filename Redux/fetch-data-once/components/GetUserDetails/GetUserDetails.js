import { useSelector } from "react-redux";

import "./GetUserDetails.css";

export default function GetUserDetails(userDetails) {
  const user = useSelector((state) => state.user.user);
 

 

  return (
    <div>
      {!user ? (
        <p className="text">No user found</p>
      ) : (
        <>
         <div>
            { userDetails.userDetails.map(user=>{
                return(
                    <div key={user.id}>
                        {user.name}
                        </div>
                )
            })
                
            }
         </div>
        </>
      )}
    </div>
  );
}
