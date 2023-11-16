import Item from "./Item";
import styles from "./TodoItems.module.css";
import { useContext } from "react";
import { MyListDatafromContext } from "../store/ItemsList";

const TodoItems = () => {
  const { myListData } = useContext(MyListDatafromContext);

  return (
    <>
      {myListData.length >= 1 && (
        <h2 className={styles.moto}>Let's finish this task fast!! 😎</h2>
      )}
      <div className={`${styles["Item-container"]}`}>
        {myListData.map((eachItem) => (
          <Item key={eachItem.data} data={eachItem.data} date={eachItem.date} />
        ))}
      </div>
    </>
  );
};
export default TodoItems;
