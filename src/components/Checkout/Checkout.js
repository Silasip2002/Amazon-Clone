import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct.js";
import Subtotal from "../Subtotal/Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://hackernoon.com/hn-images/1*lEyU2zS2TBaOl_fbXqPChA.png"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>You Shopping Basket is empty!</h2>
            <p>
              Yu have no items in your basket. To buy or more items, click "Add
              to basket" next to the items
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {/* List out all checkout product*/}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right)">
          {/* <h1>Subtotal</h1> */}
          <Subtotal />
        </div>
      )}
    </div>
  );
}
export default Checkout;
