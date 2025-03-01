import { Children } from "react";
import "../styles/resume.css";

export default function ResumeGenerator(props) {
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
        <div className="resume-professionalExp">
          <a className="professional-name">Professional Exp</a>
          {props.arrayClass[9][1].map((indElement, index) => {
            return (
              <div className="job-description" key={index}>
                <div className="job-info-details">
                  <div className="serving-date">
                    <span className="starting-date">{indElement[2]}</span>
                    {"  "}
                    <span className="last-date">{indElement[3]}</span>
                  </div>
                  <a className="location">{indElement[4]}</a>
                </div>
                <div className="role-description">
                  <a className="company-name">{indElement[0]}</a>
                  <a className="position-name">{indElement[1]}</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
