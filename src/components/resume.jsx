import { Children } from "react";
import "../styles/resume.css";

export default function ResumeGenerator(props) {
  console.log(props.arrayClass);
  return (
    <>
      <div className="resume-div">
        <div className="resume-personal-div">
          <a className="resume-name">{props.arrayClass[0][1]}</a>
          <div className="resume-info">
            <div className="resume-address">
              Address:- <span>{props.arrayClass[3][1]}</span>
            </div>
            <div className="resume-email">
              Email:- <span>{props.arrayClass[1][1]}</span>
            </div>
            <div className="resume-phone">
              Phone:- <span>{props.arrayClass[2][1]}</span>
            </div>
          </div>
        </div>
        <div className="resume-education">
          <a className="education-name">Education</a>
          <div className="college-info">
            <div className="college-date-div">
              <div className="college-date-info-div">
                <a className="college-date-start">{props.arrayClass[5][1]}</a>
                {"   -   "}
                <a className="college-date-end">{props.arrayClass[6][1]}</a>
              </div>
              <div>
                <a className="college-location">{props.arrayClass[7][1]}</a>
              </div>
            </div>
            <div className="college-info-div">
              <a className="college-name">{props.arrayClass[4][1]}</a>
              <a className="college-degree">{props.arrayClass[8][1]}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
