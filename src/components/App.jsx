import { useState } from "react";
import ResumeGenerator from "./resume";
import "../styles/App.css";
import { first } from "lodash";

function InputDetails() {
  const [firstName, setFirstName] = useState("");

  function updatingResume(input) {
    console.log(input);
  }

  return (
    <>
      <div className="general-information">
        <a>general information</a>
        <input
          onChange={({ value }) => {
            updatingResume({ value });
          }}
          className="name-input"
        />
        <input className="phone-input" />
        <input className="email-input" />
      </div>
      <div className="education-exp">
        <a>education</a>
        <input className="schoolName" />
        <input className="study-title" />
        <input className="date-study" />
      </div>
      <div className="work-exp">
        <a>work expo</a>
        <input className="company-name" />
        <input className="pos-title" />
        <input className="date" />
      </div>
      <ResumeGenerator />
    </>
  );
}

export default InputDetails;
