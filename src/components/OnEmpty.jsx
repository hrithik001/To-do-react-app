import style from "./OnEmpty.module.css";
import { useContext } from "react";
import { MyListDatafromContext } from "../store/ItemsList";
const OnEmpty = () => {
  const { myListData } = useContext(MyListDatafromContext);
  return (
    myListData.length === 0 && (
      <h2 className={style.errorstyle}>
        Empty list !🥲 let's add something today{" "}
      </h2>
    )
  );
};

export default OnEmpty;
