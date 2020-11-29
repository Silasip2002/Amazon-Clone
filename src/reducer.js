export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  console.log(action);
  // the actions come from dispatch function from the stateProvider.
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic for adding items to basket
      return {
        //   ...state,
        
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //Logic for removing items from basket
      return state;
    default:
      return state;
  }
}

export default reducer;
