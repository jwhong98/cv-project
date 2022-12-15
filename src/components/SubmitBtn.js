import React from "react";

const SubmitBtn = (props) => {
  const onClickHandler = () => {
    props.toggleForm();
    props.onClick();
  };
  return <button onClick={onClickHandler}>Submit</button>;
};

export default SubmitBtn;
