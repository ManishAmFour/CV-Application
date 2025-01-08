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
          console.log(element);
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
    ["name-Input", ""],
    ["number-Input", ""],
    ["mail-Input", ""],
    ["school-Input", ""],
    ["study-Input", ""],
    ["date-Input", ""],
    ["company-Input", ""],
    ["position-Input", ""],
    ["compDate-Input", ""],
  ]);

  function changeTheValue(value) {
    setValueTransfer(value);
  }

  return (
    <div>
      {valueTransfer.map((element, index) => (
        <InputGen
          key={index}
          className={element[0]}
          indexNumber={index}
          ArrayValue={valueTransfer}
          onChangeVar={changeTheValue}
        />
      ))}
      <ResumeGenerator arrayClass={valueTransfer} />
    </div>
  );
}

export default InputDetails;
