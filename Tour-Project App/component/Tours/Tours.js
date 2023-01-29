import { Tour } from "./Tour/Tour";

export default function Tours({ tours, removeTour }) {
  return (
    <div className="section">
      <div className="toursTitle">
        <h3> Available Tours </h3>
        <div className="underline"></div>
      </div>
      {tours.map((item) => {
        return <Tour key={item.id} {...item} removeTour={removeTour} />;
      })}
    </div>
  );
}
