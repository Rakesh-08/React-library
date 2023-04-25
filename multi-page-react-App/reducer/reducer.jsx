export const initialState = {
  cart: [],
};

const reducer = (state, action) => {

  switch (action.type) {
    case "AddToCart":
      //logic to add an item to the cart
     
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "RemoveFromCart":
      //logic to remove an item from the cart
      let newCart = [...state.cart];

      const index = state.cart.findIndex((item) => item.id === action.id);

      if (index >= 0) {
        newCart.splice(index, 1);
      }

      return { ...state, cart: newCart };

    default:
      return state;
  }
};

export default reducer;
