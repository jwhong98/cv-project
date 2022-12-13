import React, { useState } from "react";
import classes from "../styles/Education.module.css";
import CVForm from "./CVForm";
import ListItem from "./ListItem";

const Education = () => {
  const [education, setEducation] = useState([]);
  const [listing, setListing] = useState({
    start: "",
    end: "",
    degree: "",
    institute: "",
  });
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
  return (
    <section className={classes.education}>
      <h2>Education</h2>
      <div className={classes.educationContainer}>
        {education.map(createListItem)}
      </div>
      <CVForm data={education} />
    </section>
  );
};

export default Education;
