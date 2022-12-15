import React from "react";
import classes from "../styles/ListItem.module.css";

const ListItem = (props) => {
  return (
    <div className={classes.listItem}>
      <div className={classes.dates}>
        {props.start} - <br></br>
        {props.end}
      </div>
      <div className={classes.schoolInfo}>
        <p className={classes.degree}>{props.degree}</p>
        <p className={classes.institute}>{props.institute}</p>
      </div>
    </div>
  );
};

export default ListItem;
