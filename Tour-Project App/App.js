import { useEffect, useState } from "react";
import "./styles.css";
import Loading from "./Component/Loading/Loading";
import Tours from "./Component/Tours/Tours";
import "./index.css";

const url = "https://course-api.com/react-tours-project";

export default function App() {
  const [toursData, setToursData] = useState([]);
  const [loading, setLoading] = useState(true);

  function removeTour(id) {
    const newTourList = toursData.filter((tour) => tour.id !== id);

    setToursData(newTourList);
  }

  useEffect(() => {
    // fetch(url)
    // .then(Response=> Response.json())
    // .then(data=>(data))  ORRR

    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const TourData = await response.json();

      setToursData(TourData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (toursData.length === 0) {
    return (
      <div className="title">
        <h2> No Tours left</h2>
        <button onClick={() => fetchData()} className="btn">
          Refresh Tours{" "}
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={toursData} removeTour={removeTour} />
    </div>
  );
}
