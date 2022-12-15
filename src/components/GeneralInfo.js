import React, { useState } from "react";
import classes from "../styles/GeneralInfo.module.css";
import CVForm from "./CVForm";
import EditBtn from "./EditBtn";
import phone from "../assets/call.svg";
import mail from "../assets/mail.svg";
import location from "../assets/location-sharp.svg";

const GeneralInfo = () => {
  const [user, setUser] = useState({
    name: "",
    title: "",
    number: "",
    address: "",
    email: "",
  });
  const [active, setActive] = useState(false);
  const toggleForm = () => {
    setActive(!active);
  };
  const onSubmitHandler = (input) => {
    setUser(input);
  };
  return (
    <section className={classes.generalInfo}>
      <EditBtn onClick={toggleForm} />
      <header>
        <h1 className={classes.name}>{user.name ? user.name : "Name"}</h1>
        <p className={classes.title}>{user.title ? user.title : "Title"}</p>
      </header>
      <div className={classes.pageBreak}></div>
      <div className={classes.infoContainer}>
        <p className={classes.info}>
          <img src={phone} alt="phone-icon" className={classes.icon} />
          {user.number ? user.number : "Number"}
        </p>
        <p className={classes.info}>
          <img src={mail} alt="mail-icon" className={classes.icon} />
          {user.address ? user.address : "Address"}
        </p>
        <p className={classes.info}>
          <img src={location} alt="location-icon" className={classes.icon} />
          {user.email ? user.email : "Email"}
        </p>
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
