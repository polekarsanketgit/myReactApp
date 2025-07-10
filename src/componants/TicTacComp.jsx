import React, { useState } from "react";
/* call css style componant using external style.js  */
import { Title, TickTacUl, TickTacLi, TickTacButton } from "../styles/tictacStyle";
/* import './App.css'; */ 

const TicTac = () => {
  const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [count, setCount] = useState("X");
  const handleClick = (parCellNum) => {
    count === "X" ? setCount("O") : setCount("X");
    count === "O" ? setCount("X") : setCount("O");
    console.log(parCellNum);

    const getID = document.getElementById(`box` + parCellNum);
    getID.innerHTML = count;
    getID.disabled = true;
  };
  const newNumber = numberArr.map((cellNum, index) => {
    return (
      <TickTacLi key={index} className="tickTac-list">
        <TickTacButton
          onClick={() => {
            handleClick(cellNum);
          }}
          id={`box` + cellNum}
        />
      </TickTacLi>
    );
  });

  return (
    <>
    <h1>Sample code of Tic Tac Toe</h1>
      <Title>Tic Tac Toe</Title>
      <div>
        <TickTacUl>{newNumber}</TickTacUl>
      </div>
    </>
  );
};

export default TicTac;
