import Education from "./components/Education";
import GeneralInfo from "./components/GeneralInfo";
import classes from "../src/styles/App.module.css";

function App() {
  return (
    <div className={`${classes.app} App`}>
      <GeneralInfo />
      <Education />
    </div>
  );
}

export default App;
