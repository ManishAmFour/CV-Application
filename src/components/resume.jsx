import { Children } from "react";
import "../styles/resume.css";

export default function ResumeGenerator(props) {
  return (
    <>
      <div className="resume-div">
        <div className="resume-personal-div">
          <a className="resume-name">{props.arrayClass[0][1]}</a>
          <a className="resume-info">
            <a className="resume-address">
              Address:- <a>{props.arrayClass[3][1]}</a>
            </a>
            <a className="resume-email">
              Email:- <a>{props.arrayClass[1][1]}</a>
            </a>
            <a className="resume-phone">
              Phone:- <a>{props.arrayClass[2][1]}</a>
            </a>
          </a>
        </div>
      </div>
    </>
  );
}
