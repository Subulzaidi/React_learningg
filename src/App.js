import React, { useState } from "react";
import Heading from "./App/heading";

const data = [
  // { id: 1, name: "hadi", age: "23", status: "developer" },
  "+",
];
const initialVal = {
  name: "",
  status: "",
  age: "",
};
const App = () => {
  const [list, setlist] = useState(data);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [age, setAge] = useState("");

  const addElementInListArr = () => {
    if (name === "" || age === 0 || status === "") {
      alert("You forget to fill all the fields!!!");
    } else {
      const newPerson = {
        id: new Date(),
        name,
        age,
        status,
      };

      setlist([...list, newPerson]);
      setAge(initialVal.age);
      setName(initialVal.name);
      setStatus(initialVal.status);
    }
  };
  const deleteElement = (id) => {
    const updatedList = list.filter((x) => x.id !== id);
    setlist(updatedList);
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
  const handleSubmit = (event) => {
    event.preventDefault();
  console.log("Submitted")};
    return (
      <div className="container">
        <Heading />
        <form type="submit" onSubmit={handleSubmit} className="data">
          <input
            className="box inputs"
            placeholder="Enter the Name "
            onChange={NewName}
            value={name}
          />
          <input
            type="number"
            className="box inputs"
            placeholder="Enter the Age "
            onChange={Newage}
            value={age}
          />
          <input
            className="box inputs"
            placeholder="Enter the Status "
            onChange={NewStatus}
            value={status}
          />
        </form>
        <div id="btn">
          <button type="submit" className="box btns" onClick={addElementInListArr}>
            Add ELE
          </button>
        </div>

        {list.map((x) => {
          return (
            <div className="box">
              {" "}
              {x.name} - {x.status} - {x.age}
              {"   "}
              <div className="deltebtn">
                <button
                  id="deltebtn"
                  type="remove"
                  onClick={() => deleteElement(x.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

export default App;
