import { useState } from "react";
import { StateContextValue } from "../../context/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";

export default function Checkout() {
  const [{ cart }] = StateContextValue();
   

  let DeliveryCharges = 40;
  let Discount = 0;
  let ExtraCharges = 0;

  const TotalPrice = () => {
    let PreTotal = Math.round(
      cart?.reduce((sum,product) => (sum += product.price), 0)
    );

    let PostTotal = PreTotal - (Discount - DeliveryCharges -ExtraCharges);

    return [PreTotal, PostTotal];
  };

  return (
    <div className="checkout">
      {cart?.length == 0 ? (
        <div className="emptyCart">
          <h1> Your shopping cart is empty</h1>
          <p>
            {" "}
            You have no items in the cart. To add products , click to "add To
            cart " button in the products page.
          </p>
        </div>
      ) : (
        <div className="checkoutPart">
          <div className="checkoutElements">
            {cart.map(({ id, title, image, price, rating }) => (
              <CheckoutProduct
                key={id}
                id={id}
                title={title}
                image={image}
                price={price}
                rating={rating}
        
               
              />
            ))}
          </div>
          <div className="checkoutPrice">
            <h3> Price details </h3>
            <div className="priceDetails">
              <div className="charges">
                <h4> Selling Price</h4>
                <p> Rs. {TotalPrice()[0]} </p>
              </div>

              <div className="charges">
                <h4> Discount</h4>
                <p>{Discount ? `Rs. ${Discount} ` : "Not available"} </p>
              </div>

              <div className="charges">
                <h4>Extra charges</h4>
                <p> Rs. {ExtraCharges} </p>
              </div>

              <div className="charges">
                <h4> Delivery charges</h4>
                <p>
                  {DeliveryCharges
                    ? `Rs. ${DeliveryCharges} `
                    : "Free Delivery"}{" "}
                </p>
              </div>

              <div className="finalPrice ">
                <h4> Total price</h4>
                <p> Rs. {TotalPrice()[1]} </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
