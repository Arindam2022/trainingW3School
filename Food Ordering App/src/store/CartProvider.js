import { useReducer } from "react";
import CartContext from "./cart-context";
import React from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
    if(action.type==="ADD"){
        const updatedItems = state.item.concat(action.item);
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
        return{
            items:updatedItems,
            totalAmount:updatedAmount   
        };
    }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState);
  const addToCartHandler = (item) => {
      dispatchCartAction({type: "ADD", item:item});
  };
  const removeFromCartHandler = (id) => {
    dispatchCartAction({type: "REMOVE", id:id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
