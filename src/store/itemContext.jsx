import { createContext, useReducer } from "react";

//intialState for Reducer
const intialState = {
  items: [],
  totalAmount: 0,
};

//Reducer
const itemReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    const existItem = state.items[existItemIndex];
    let updateItems;
    if (existItem) {
      const updateItem = {
        ...existItem,
        amount: existItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existItemIndex = state.items.findIndex((item) => item.id === action.id);
    const existItem = state.items[existItemIndex];
    const updateTotalAmount = state.totalAmount - existItem.price;

    let updateItems;
    if (existItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = { ...existItem, amount: existItem.amount - 1 };
      updateItems = [...state.items];
      updateItems[existItemIndex] = updateItem;
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
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
