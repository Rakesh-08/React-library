import "./styles.css";

import useFetchData from "./customHook/useFetchData";

export default function App() {
  const [users] = useFetchData("https://jsonplaceholder.typicode.com/users");
  const [dogData] = useFetchData("https://dog.ceo/api/breeds/image/random");
  // for making a request and fetching the resource
  // it can take more than one argument but
  // one mandatory argument is path of the resource or api endpoints
  // it returns a promise along with the respone of that request
  //we fetch the json file across the network
  // it  returns the representation  of the response
  // so we extract  the json body content from response object using json() method
  //  "https://jsonplaceholder.typicode.com/users"
  // "https://dog.ceo/api/breeds/image/random"

  return (
    <div className="App">
      <h1>{users?.map((obj) => obj.name)} </h1>
      <img src={dogData?.message} alt="dogImage" />
    </div>
  );
}
