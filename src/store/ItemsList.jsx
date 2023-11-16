import { createContext } from "react";
import { useReducer } from "react";

export const MyListDatafromContext = createContext({
  myListData: [],
  addnewItems: () => {},
  deleteItems: () => {},
});

const listReducer = (currentListItems, action) => {
  let newList = currentListItems;
  if (action.type === "ADD_ITEM") {
    newList = [
      ...currentListItems,
      { data: action.payload.workData, date: action.payload.dueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newList = currentListItems.filter(
      (ele) => ele.data != action.payload.workData
    );
  }
  return newList;
};

const WrapperProvider = ({ children }) => {
  const [myListData, dispatchedItems] = useReducer(listReducer, []);

  const addnewItems = (workData, dueDate) => {
    const addNew = {
      type: "ADD_ITEM",
      payload: {
        workData,
        dueDate,
      },
    };
    dispatchedItems(addNew);
  };

  const deleteItems = (data) => {
    const deleteitem = {
      type: "DELETE_ITEM",
      payload: {
        workData: data,
      },
    };
    dispatchedItems(deleteitem);
  };
  return (
    <MyListDatafromContext.Provider
      value={{ myListData, addnewItems, deleteItems }}
    >
      {children}
    </MyListDatafromContext.Provider>
  );
};

export default WrapperProvider;
