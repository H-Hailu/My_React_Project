import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [itemText, setItemText] = useState([]);

  function changeHandler(event) {
    setItem(event.target.value);
  }

  function clickHandler() {
    setItemText((prevValue) => {
      return [...prevValue, item];
    });

    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandler} type="text" value={item} />
        <button onClick={clickHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemText.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
