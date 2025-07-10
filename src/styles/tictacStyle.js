import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const TickTacUl = styled.ul`
  border: 1px solid blue;
  padding: 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  margin: auto;
  width: 500px;
`;

export const TickTacLi = styled.li`
    list-style-type: none;
    background-color: rgb(0, 226, 113);
    text-align: center;
    padding: 10px;
`;

export const TickTacButton = styled.button`
    width: 100%;
    height: 80px;
    border: none;
    background-color: rgb(21, 163, 92);
    color: black;
    font-size: 20px;
    font-weight: bold;
`;