import React, { useState } from "react";
import Heading from "./App/heading";
const data = [
  {
    id: new Date(),
    task: "My task",
  },
];
const initalVal = {
  task: "",
};

const App = () => {
  const [arr, setarr] = useState(data);
  const [task, setTask] = useState("");
  const addNewTAsk = () => {
    if (task === "") {
      alert("Invalid Input!");
    } else {
      const newData = {
        id: new Date(),
        task,
      };
      setarr([...arr, newData]);
      setTask(initalVal.task);
    }
  };
  const NewTask = (inputProp) => {
    setTask(inputProp.target.value);
  };

  const deleteElement = (id) => {
    let updatearr = arr.filter((x) => x.id !== id);
    setarr(updatearr);
  };
  return (
    <div className="container">
      <Heading />
      <div className="inputbox">
        <input
          className="IN"
          placeholder="Add something to do"
          onChange={NewTask}
          value={task}
        />
        <button type="submit" onClick={addNewTAsk}>
          save
        </button>
      </div>

      {arr.map((x) => {
        return (
          <div className="box">
            <input type="checkbox" />
            {x.task}
            <div className="deltebtn">
              <button type="remove" onClick={() => deleteElement(x.id)}>
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
