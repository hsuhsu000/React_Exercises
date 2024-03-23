import { createContext, useReducer } from "react";

//intialState for Reducer
const intialState = {
  items: [],
  totalAmount: 0,
};

//Reducer
const itemReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return intialState;
};

//itemContext
export const itemContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

//itemContextProvider
const ItemContextProvider = (props) => {
  //call Reducer
  const [itemState, dispatchItem] = useReducer(itemReducer, intialState);
  const addItemHandler = (item) => {
    dispatchItem({ type: "ADD_ITEM", item });
  };
  const removeItemHandler = (id) => {
    dispatchItem({ type: "REMOVE_ITEM", id });
  };

  //itemContext obj
  const itemCtx = {
    items: itemState.items,
    totalAmount: itemState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return <itemContext.Provider value={itemCtx}>{props.children}</itemContext.Provider>;
};

export default ItemContextProvider;
