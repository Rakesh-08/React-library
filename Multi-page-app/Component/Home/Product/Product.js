import { StateContextValue } from "../../../context/StateProvider";
import "./Product.css";

function Product({ id, title, price, image, rating }) {
  const [state, dispatch] = StateContextValue();

  const addToCart = () => {
    dispatch({
      type: "AddToCart",
      payload: { id, title, price, image, rating },
    });
  };

  return (
    <div className="product">
      <div className="productInfo">
        <p> {title} </p>
        <p className="productPrice">
          <strong> Rs. </strong>
          <span> {price} </span>
        </p>
        <div className="productRating">
          {Array(rating)
            .fill()
            .map((i, index) => (
              <p key={index}> ★</p>
            ))}
        </div>
      </div>

      <img src={image} alt="product" />
      <button onClick={addToCart}> add to cart </button>
    </div>
  );
}

export { Product };
