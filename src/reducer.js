export const initialState = {
  basket: [],
  user: "",
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // the actions come from dispatch function from the stateProvider.
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      //Logic for adding items to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //Logic for removing items from basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //remove the item in the basket .
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}  as it is not in the basket)`
        );
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
