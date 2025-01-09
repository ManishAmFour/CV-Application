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
          //props.onChangeVar([...props.ArrayValue, (element[index] = [value])]);
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

function InputDetails() {
  const [valueTransfer, setValueTransfer] = useState([
    ["Full-name", ""],
    ["Email", ""],
    ["Phone-number", ""],
    ["Address", ""],
    ["School", ""],
    ["start-date", ""],
    ["end-date", ""],
    ["company-Name", ""],
    ["Position-role", ""],
    ["serving-period", ""],
  ]);

  function changeTheValue(value) {
    setValueTransfer(value);
  }

  return (
    <>
      <div className="input-div">
        <i>Personal Details</i>

        {valueTransfer.map((element, index) => {
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
        })}
      </div>
      <ResumeGenerator arrayClass={valueTransfer} />
    </>
  );
}

export default InputDetails;
