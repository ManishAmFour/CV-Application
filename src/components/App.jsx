import { useState } from "react";
import ResumeGenerator from "./resume";
import "../styles/App.css";
import { first } from "lodash";

function InputGen(props) {
  const [inputValue, setInputValue] = useState("");

  function ChangeState(value) {
    setInputValue(value);
  }

  return (
    <>
      <input
        className={props.className}
        value={inputValue}
        onChange={(e) => {
          ChangeState(e.target.value);
        }}
      />
    </>
  );
}

function InputDetails() {
  return (
    <div>
      <div className="general-information">
        <a>general information</a>
        <InputGen className={"name-input"} />
        <InputGen className={"number-input"} />
        <InputGen className={"mail-input"} />
      </div>
      <div className="education-exp">
        <a>education</a>
        <InputGen className={"school-input"} />
        <InputGen className={"study-input"} />
        <InputGen className={"date-input"} />
      </div>
      <div className="work-exp">
        <a>work expo</a>
        <InputGen className={"Company-input"} />
        <InputGen className={"position-input"} />
        <InputGen className={"CompDate-input"} />
      </div>
      <ResumeGenerator />
    </div>
  );
}

export default InputDetails;
