import { useState } from "react";
import ResumeGenerator from "./resume";
import "../styles/App.css";
import { first, map } from "lodash";

function InputGen(props) {
  const [inputValue, setInputValue] = useState("");

  function ChangeState(value) {
    setInputValue(value);
    props.ArrayValue.map((element, index) => {
      if (props.indexNumber === index) {
        if (props.indexNumber !== 9) {
          element[1] = value;
          props.onChangeVar([...props.ArrayValue]);
        } else {
          element[1][element[1].length - 1].map((individual, index2) => {
            if (index2 === props.profInputValue) {
              individual = value;
              props.onChangeVar([...props.ArrayValue]);
            }
          });
        }
      }
    });
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
  const [buttonClicked, setButtonClicked] = useState(false);

  function buttonClickedFunction() {
    setButtonClicked(!buttonClicked);
    if (!buttonClicked) {
      props.ArrayValue[9][1].push(["", "", "", "", ""]);
      props.onChangeVar([...props.ArrayValue]);
    }
  }

  return (
    <div>
      {buttonClicked ? (
        <div>
          <InputGen
            className={props.className}
            indexNumber={props.indexNumber}
            ArrayValue={props.ArrayValue}
            onChangeVar={props.onChangeVar}
            profInputValue={0}
          />
          <InputGen
            className={props.className}
            indexNumber={props.indexNumber}
            ArrayValue={props.ArrayValue}
            onChangeVar={props.onChangeVar}
            profInputValue={1}
          />
          <InputGen
            className={props.className}
            indexNumber={props.indexNumber}
            ArrayValue={props.ArrayValue}
            onChangeVar={props.onChangeVar}
            profInputValue={2}
          />
          <InputGen
            className={props.className}
            indexNumber={props.indexNumber}
            ArrayValue={props.ArrayValue}
            onChangeVar={props.onChangeVar}
            profInputValue={3}
          />
          <InputGen
            className={props.className}
            indexNumber={props.indexNumber}
            ArrayValue={props.ArrayValue}
            onChangeVar={props.onChangeVar}
            profInputValue={4}
          />
          <button onClick={buttonClickedFunction} className="save-button">
            Save
          </button>
          <button className="delete-button">Delete</button>
        </div>
      ) : (
        <button onClick={buttonClickedFunction}>Add experience</button>
      )}
    </div>
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
    ["professional-exp", []],
  ]);

  function changeTheValue(value) {
    setValueTransfer(value);
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
                  className={element[0]}
                  indexNumber={index}
                  ArrayValue={valueTransfer}
                  onChangeVar={changeTheValue}
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
