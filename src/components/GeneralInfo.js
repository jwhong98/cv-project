import React, { useState } from "react";
import classes from "../styles/GeneralInfo.module.css";
import CVForm from "./CVForm";
import EditBtn from "./EditBtn";

const GeneralInfo = () => {
  const [user, setUser] = useState({
    name: "Name",
    title: "Title",
    number: "number",
    address: "Adress",
    email: "Email",
  });
  const [active, setActive] = useState(false);
  const toggleForm = () => {
    setActive(!active);
  };
  const onSubmitHandler = (input) => {
    setUser(input);
  };
  return (
    <section>
      <EditBtn onClick={toggleForm} />
      <header>
        <h1>{user.name}</h1>
        <p>{user.title}</p>
      </header>
      <div className={classes.infoContainer}>
        <p className={classes.info}>{user.number}</p>
        <p className={classes.info}>{user.address}</p>
        <p className={classes.info}>{user.email}</p>
      </div>
      {active && (
        <CVForm
          data={user}
          onSubmit={onSubmitHandler}
          toggleForm={toggleForm}
        />
      )}
    </section>
  );
};

export default GeneralInfo;
