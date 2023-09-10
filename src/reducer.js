export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  if (action.type === "ADD_TO_BASKET") {
    return {
      ...state,
      basket: [...state.basket, action.item],
    };
  } else if (action.type === "REMOVE_FROM_BASKET") {
    let newBasket = [...state.basket];
    const index = state.basket.findIndex(
      (basketItem) => basketItem.id === action.id
    );
    if (index >= 0) {
      newBasket.splice(index, 1);
    } else {
      console.warn(`Cant remove product (id: ${action.id}`);
    }
    return {
      ...state,
      basket: newBasket,
    };
  } else if (action.type === "SET_USER") {
    return { ...state, user: action.user };
  } else {
    return state;
  }
};
export default reducer;
