import React, { useState } from "react";
import classes from "../styles/Education.module.css";
import CVForm from "./CVForm";
import EditBtn from "./EditBtn";
import ListItem from "./ListItem";

const Education = () => {
  const [education, setEducation] = useState([]);
  const [listing, setListing] = useState({
    start: "",
    end: "",
    degree: "",
    institute: "",
  });
  const [active, setActive] = useState(false);

  const onSubmitHandler = (input) => {
    setListing(input);
    setEducation((oldEducation) => [...oldEducation, input]);
  };

  const createListItem = (info) => {
    return (
      <ListItem
        start={info.start}
        end={info.end}
        degree={info.degree}
        institute={info.institute}
      />
    );
  };

  const toggleForm = () => {
    setActive(!active);
  };
  return (
    <section className={classes.education}>
      <EditBtn onClick={toggleForm} />
      <h2>Education</h2>
      <div className={classes.educationContainer}>
        {education.map(createListItem)}
      </div>
      {active && (
        <CVForm
          data={listing}
          onSubmit={onSubmitHandler}
          toggleForm={toggleForm}
        />
      )}
    </section>
  );
};

export default Education;
