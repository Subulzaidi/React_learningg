import React, { useState } from "react";
import Heading from "./App/heading";

const data = [
  {
    name: "hadi",
    age: "23",
    status: "developer",
  },
  {
    name: "Wali",
    age: "23",
    status: "Python Developer",
  },
  {
    name: "Sherazi",
    age: "20",
    status: "AI Developer",
  },
];

const App = () => {
  const [list, setlist] = useState(data);

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [age, setAge] = useState(0);

  const addElementInListArr = () => {
    const newPerson = {
      name,
      age,
      status,
    };

    setlist([...list, newPerson]);
  };
  const NewName = (inputProp) => {
    setName(inputProp.target.value);
  };
  const Newage = (inputProp) => {
    setAge(inputProp.target.value);
  };
  const NewStatus = (inputProp) => {
    setStatus(inputProp.target.value);
  };
  return (
    <div className="container">
      <Heading />
      <div className="data">
        <input
          className="box inputs"
          placeholder="Enter the Name 🤌"
          onChange={NewName}
          value={name}
        />
        <input
          className="box inputs"
          placeholder="Enter the Age 🤌"
          onChange={Newage}
        />
        <input
          className="box inputs"
          placeholder="Enter the Status 🤌"
          onChange={NewStatus}
          value={status}
        />
      </div>
      <div id="btn">
      <button className="box btns" onClick={addElementInListArr}>
        Add ELE
      </button>
      </div>

      {list.map((x) => {
        return (
          <div className="box">
            {" "}
            {x.name} - {x.status} - {x.age}{" "}
          </div>
        );
      })}
    </div>
  );
};

export default App;
