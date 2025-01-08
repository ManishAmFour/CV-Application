import { Children } from "react";
import "../styles/resume.css";

export default function ResumeGenerator(props) {
  console.log(props.arrayClass);

  return (
    <>
      <div className="resume-div">
        <div>{props.nameInput}</div>
      </div>
    </>
  );
}
