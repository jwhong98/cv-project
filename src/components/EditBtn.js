import React from "react";
import classes from "../styles/Btn.module.css";

const EditBtn = (props) => {
  return (
    <button
      className={`${classes.editBtn} ${classes.btn}`}
      onClick={props.onClick}
    >
      Edit
    </button>
  );
};

export default EditBtn;
