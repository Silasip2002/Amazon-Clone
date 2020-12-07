import React from "react";
import "../CheckoutProduct/CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove Items from the basket
    // 1. use the state to get basket and dispatch
    // 2. dispatch the action = removeToBasket
    // .3 send the id to the reducer -> the reducer will remove the product by id
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <p>{price}</p>
        </p>
        <div className="checkoutProduct__ranting">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
