import { useContext, useState } from "react";
import ResumeGenerator from "./resume";
import "../styles/App.css";

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
          element[1][element[1].length - 1].forEach((individual, index2) => {
            if (index2 === props.profInputValue) {
              element[1][element[1].length - 1][index2] = value;
              props.onChangeVar([...props.ArrayValue]);
            }
          });
        }
      }
    });
  }

  let inputType =
    props.className === "start-date" || props.className === "end-date"
      ? "date"
      : "text";

  let lengthInsideInput = props.className === "Phone-number" ? 10 : 25;
  props.className === "start-date" || props.className === "end-date"
    ? "date"
    : "text";

  return (
    <div>
      <input
        className="input-bar-value-detail"
        value={inputValue}
        type={inputType}
        maxLength={lengthInsideInput}
        onChange={(e) => {
          ChangeState(e.target.value);
        }}
      />
    </div>
  );
}

function ProfessionalExp(props) {
  const [buttonClicked, setButtonClicked] = useState(false);

  function buttonClickedFunction(value) {
    setButtonClicked(!buttonClicked);
    if (!buttonClicked) {
      props.ArrayValue[9][1].push(["", "", "", "", ""]);
      props.onChangeVar([...props.ArrayValue]);
    }
    if (buttonClicked && value === true) {
      props.ArrayValue[9][1].splice(props.ArrayValue[9][1].length - 1, 1);
      props.onChangeVar([...props.ArrayValue]);
    }

    if (props.inputValue === true) {
      props.inputMan(false);
    } else if (props.inputValue === false) {
      props.inputMan(true);
    }
  }

  return (
    <>
      {buttonClicked ? (
        <>
          <div className="upper-input-class">
            Company Name
            <InputGen
              className={props.className}
              indexNumber={props.indexNumber}
              ArrayValue={props.ArrayValue}
              onChangeVar={props.onChangeVar}
              profInputValue={0}
            />
          </div>
          <div className="upper-input-class">
            Job position
            <InputGen
              className={props.className}
              indexNumber={props.indexNumber}
              ArrayValue={props.ArrayValue}
              onChangeVar={props.onChangeVar}
              profInputValue={1}
            />
          </div>
          <div className="upper-input-class">
            Starting Date
            <InputGen
              className={"start-date"}
              indexNumber={props.indexNumber}
              ArrayValue={props.ArrayValue}
              onChangeVar={props.onChangeVar}
              profInputValue={2}
            />
          </div>
          <div className="upper-input-class">
            Last Date
            <InputGen
              className={"end-date"}
              indexNumber={props.indexNumber}
              ArrayValue={props.ArrayValue}
              onChangeVar={props.onChangeVar}
              profInputValue={3}
            />
          </div>
          <div className="upper-input-class">
            Job Location
            <InputGen
              className={props.className}
              indexNumber={props.indexNumber}
              ArrayValue={props.ArrayValue}
              onChangeVar={props.onChangeVar}
              profInputValue={4}
            />
          </div>

          <button
            onClick={buttonClickedFunction}
            className="input-control-button save-button"
          >
            Save
          </button>
          <button
            onClick={() => {
              let valueTransefferd = true;
              buttonClickedFunction(valueTransefferd);
            }}
            className="input-control-button delete-button"
          >
            Delete
          </button>
        </>
      ) : (
        <button className="add-desc-button" onClick={buttonClickedFunction}>
          Add experience
        </button>
      )}
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
    ["college-location", "Noida,Uttar Pradesh"],
    ["college-degree", "Btech"],
    ["professional-exp", []],
  ]);

  const [inputValue, setInputValue] = useState(true);

  function changeTheValue(value) {
    setValueTransfer(value);
  }

  return (
    <>
      <div className="main-container">
        {inputValue ? (
          <div className="input-div">
            <i>Personal Details</i>

            {valueTransfer.map((element, index) => {
              if (element[0] === "professional-exp") {
                return (
                  <div key={index}>
                    <ProfessionalExp
                      inputValue={inputValue}
                      inputMan={setInputValue}
                      className={element[0]}
                      indexNumber={index}
                      ArrayValue={valueTransfer}
                      onChangeVar={changeTheValue}
                    />
                  </div>
                );
              } else {
                return (
                  <div className="upper-input-class" key={index}>
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
        ) : (
          <div className="input-div-full">
            <i>Personal Details</i>

            {valueTransfer.map((element, index) => {
              if (element[0] === "professional-exp") {
                return (
                  <div key={index}>
                    <ProfessionalExp
                      inputValue={inputValue}
                      inputMan={setInputValue}
                      className={element[0]}
                      indexNumber={index}
                      ArrayValue={valueTransfer}
                      onChangeVar={changeTheValue}
                    />
                  </div>
                );
              } else {
                return (
                  <div className="upper-input-class" key={index}>
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
        )}

        <ResumeGenerator arrayClass={valueTransfer} />
      </div>
    </>
  );
}

export default InputDetails;
