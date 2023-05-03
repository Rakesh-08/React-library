
import { useNavigate } from "react-router-dom"


export default function Home() {
     const navigate= useNavigate()
    
    const takeToAbout = () => {
        navigate("/about");
       
        
    }
    return (
      <div>
        <h2>Home</h2>
        <button onClick={takeToAbout}>Go to about page</button>
      </div>
    );
   
}
