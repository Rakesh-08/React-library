import { StateContextValue } from "../../../context/StateProvider";
import "./CheckoutProduct.css";

export default function CheckoutProduct({ id, title, price, image, rating }) {
  const [_, dispatch] = StateContextValue();

  const removeFromCart = () => {
    dispatch({
      type: "RemoveFromCart",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProductImage" src={image} />
      <div>
        <p>{title}</p>
        <p>
          <small> Rs. {price}</small>
        </p>
        <div className="checkoutProductRating">
          {Array(rating)
            .fill()
            .map((i, index) => (
              <p key={index}> ★</p>
            ))}
        </div>

        <button onClick={removeFromCart}> remove from cart </button>

        <div className="quantityContainer">
          <div> 0 </div>
          <div className="itemQuantity">
            <button className="increase"> + </button>
            <p> Quantity </p>
            <button className="decrease"> - </button>
          </div>
        </div>
      </div>
    </div>
  );
}
