import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //task1
  const [inputvalue, setInputvalue] = useState("");
  const [mesg, setMesg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputvalue(value);
    if (value < 0) {
      setMesg("Enter a postive value");
    } else {
      setMesg("");
    }
  };
  //task2
  const [secinputValue, setsecInuptvalue] = useState("");
  const [eventval, setEventval] = useState([]);

  const handlechangeSec = (e) => {
    const value = parseInt(e.target.value, 10);
      if (value < 0) {
      setsecInuptvalue(""); 
      setEventval([]);  
      return;
    }  
      setsecInuptvalue(e.target.value);

     
    
    if (value % 2 === 0) {
      setEventval([value + 2, value + 4, value + 6]);
    } else  {
      setEventval([]);
    }
  };
  //task3
  const [thirdinputValue, setthirdInuptvalue] = useState("");
  const [oddval, setOddval] = useState([]);

  const handlechangeThird = (e) => {
    const value = parseInt(e.target.value, 10);
      if (value < 0) {
      setthirdInuptvalue(""); 
      setOddval([]);  
      return;
    }  
      setthirdInuptvalue(e.target.value);

     
    
    if (value % 2 === 1) {
      setOddval([value + 2, value + 4, value + 6]);
    } else  {
      setOddval([]);
    }
  };

  return (
    <>
      <h3>
        <span>Task1:</span>
        <b>If the user types negativ numbers show enter a postive value</b>
      </h3>
      <input
        onChange={handleChange}
        type="number"
        name=""
        id=""
        value={inputvalue}
      />
      <p>{inputvalue}</p>
      <p>{mesg}</p>
      <br />
      <br />
      <h3>
        <span>Task2:</span>
        <b>if the user types an even number show the next 3 even number</b>
      </h3>
      <input
        onChange={handlechangeSec}
        type="number"
        name=""
        id=""
        value={secinputValue}
      />
      <br />

      <ul>
        {eventval.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <h3>
        <span>Task3:</span>
        <b>if the user types an odd number show the next 3 odd number</b>
      </h3>
      <input
        onChange={handlechangeThird}
        type="number"
        name=""
        id=""
        value={thirdinputValue}
      />
      <br />

      <ul>
        {oddval.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
