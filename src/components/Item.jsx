import style from "./Item.module.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MyListDatafromContext } from "../store/ItemsList";
import { useContext } from "react";

function Item({ data, date }) {
  const { deleteItems } = useContext(MyListDatafromContext);
  return (
    <div className="container ">
      <div className={`${style["kg-row"]} row`}>
        <div className="col-6">{data}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => deleteItems(data)}
          >
            <RiDeleteBin5Fill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
