import { useRef, useContext } from "react";
import { MyListDatafromContext } from "../store/ItemsList";
import styles from "./AddData.module.css";
import { AiFillSave } from "react-icons/ai";

function AddData() {
  const workData = useRef();
  const dueDate = useRef();
  const { addnewItems } = useContext(MyListDatafromContext);

  const handelClick = (event) => {
    event.preventDefault();
    addnewItems(workData.current.value, dueDate.current.value);
    workData.current.value = "";
    dueDate.current.value = "";
  };

  return (
    <div className="container">
      <form className={`${styles["kg-row"]} row`} onSubmit={handelClick}>
        <div className="col-6">
          <input
            className={`${styles["kg-input"]}`}
            type="text"
            ref={workData}
            placeholder="enter here.."
          />
        </div>

        <div className="col-4">
          <input
            className={`${styles["kg-input"]}`}
            type="date"
            ref={dueDate}
          />
        </div>

        <div className="col-2">
          <button className={`btn btn-success ${styles["kg-button"]}`}>
            <AiFillSave />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddData;
