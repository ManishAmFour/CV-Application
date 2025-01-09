import { useState } from "react";
import ResumeGenerator from "./resume";
import "../styles/App.css";
import { first } from "lodash";

function InputGen(props) {
  const [inputValue, setInputValue] = useState("");

  function ChangeState(value) {
    setInputValue(value);
    if (props.onChangeVar) {
      props.ArrayValue.map((element, index) => {
        if (props.indexNumber === index) {
          element[1] = value;
          props.onChangeVar([...props.ArrayValue]);
        }
      });
    }
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

function ProfessionalExp(props) {
  function callingTheFunc() {
    console.log(document.querySelector(`${props.docName}`));
  }

  return (
    <>
      <button onClick={callingTheFunc} className="exp-button">
        Add Experience
      </button>
    </>
  );
}

function InputDetails() {
  const [valueTransfer, setValueTransfer] = useState([
    ["Full-name", "Manish Tewatia"],
    ["Email", "ManishTewatXXXXXX@gmail.com"],
    ["Phone-number", "8272867XXX"],
    ["Address", "C-83 Kishan Pura Modinagar,Ghaziabad"],
    ["college-name", "Galgotias College Of Engineering"],
    ["start-date", "30/oct/2023"],
    ["end-date", "30/oct/2027"],
    ["college-location", "Noida,Gautam Budh Nagar"],
    ["college-degree", "Btech"],
    ["professional-exp", ""],
  ]);

  function changeTheValue(value) {
    setValueTransfer(value);
  }

  function setUpTheNoOfExp(value) {
    console.log(value);
  }

  return (
    <>
      <div className="input-div">
        <i>Personal Details</i>

        {valueTransfer.map((element, index) => {
          if (element[0] === "professional-exp") {
            return (
              <div key={index}>
                <ProfessionalExp
                  docName={element[0]}
                  consoleFunction={setUpTheNoOfExp}
                />
              </div>
            );
          } else {
            return (
              <div className={element[0]} key={index}>
                {element[0]}
                <InputGen
                  className={element[0]}
                  indexNumber={index}
                  ArrayValue={valueTransfer}
                  onChangeVar={changeTheValue}
                />
              </div>
            );
          }
        })}
      </div>
      <ResumeGenerator arrayClass={valueTransfer} />
    </>
  );
}

export default InputDetails;
