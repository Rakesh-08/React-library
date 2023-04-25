import { StateContextValue } from "../../../context/StateProvider";
import "./Product.css";

function Product({ id, title, price, image, rating  }) {
   const [{cart}, dispatch] = StateContextValue();

  const addToCart = () => {
    let alreadyAdded = cart.find(i => i.id == id);
    if (alreadyAdded) {
      alert("Product already added in your cart")
      return;
    }
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
          <strong> &#8377; </strong>
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
