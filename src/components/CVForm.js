import React from "react";
import classes from "../styles/CVForm.module.css";
import SubmitBtn from "./SubmitBtn";

const CVForm = (props) => {
  const keys = Object.keys(props.data);
  const onSubmitHandler = () => {
    let edit = {};
    for (let key of keys) {
      edit[key] = document.getElementById(key).value;
    }
    console.log(edit);
    props.onSubmit(edit);
  };
  const createInputs = (info) => {
    return (
      <div key={info}>
        <label htmlFor={info}>{info}</label>
        <input
          type={info === "number" ? "number" : "text"}
          name={info}
          id={info}
        />
      </div>
    );
  };
  return (
    <div className={classes.formContainer}>
      {keys.map(createInputs)}
      <SubmitBtn onClick={onSubmitHandler} toggleForm={props.toggleForm} />
    </div>
  );
};

export default CVForm;
