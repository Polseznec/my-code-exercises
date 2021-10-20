import React, { useState } from "react";
import styled from "styled-components";

import { AppContainer } from "./styles/Container.style.jsx";
import { CalculatorBtn } from "./styles/CalculatorBtn.style";
import { Screen } from "./styles/CalculatorScreen.style";

function App() {
  const [savedValor, setSavedValor] = useState([]);
  const [screenDisplayer, setScreenDisplayer] = useState(0);

  const [number, setNumber] = useState(0);
  const [mathValor, setMathValor] = useState(String);

  const handleNumber = (e) => {
    // if (screenDisplayer === "/" || "x" || "-" || "+") {
    //   setSavedValor([...savedValor, screenDisplayer.toString()]);
    // }

    let event = e.target.innerHTML;
    if (number === 0) {
      setNumber(event);
      setScreenDisplayer(parseInt(event));
    } else {
      setNumber(number + event);
      setScreenDisplayer(parseInt(number + event));
    }
  };

  const handleSymbole = (e) => {
    setScreenDisplayer(e.target.innerHTML.toString());
    setSavedValor([...savedValor, parseInt(screenDisplayer)]);
    setNumber(0);
  };

  const handleReset = () => {
    setSavedValor([]);
    setNumber(0);
    setScreenDisplayer(0);
  };

  console.log("------------------");
  console.log("Valor => ", mathValor);
  console.log("Number => ", number);
  //console.log(typeof screenDisplayer);
  console.log("Screen Displayer =>", screenDisplayer);
  console.log("Saved Valor =>", savedValor);

  return (
    <AppContainer>
      <Grid>
        <Screen>{screenDisplayer}</Screen>
        <div></div>
        <CalculatorBtn onClick={handleNumber}>1</CalculatorBtn>
        <CalculatorBtn onClick={handleNumber}>2</CalculatorBtn>
        <CalculatorBtn onClick={handleNumber}>3</CalculatorBtn>
        <CalculatorBtn onClick={handleSymbole}>/</CalculatorBtn>
        <div></div>
        <CalculatorBtn onClick={handleNumber}>4</CalculatorBtn>
        <CalculatorBtn onClick={handleNumber}>5</CalculatorBtn>
        <CalculatorBtn onClick={handleNumber}>6</CalculatorBtn>
        <CalculatorBtn onClick={handleSymbole}>x</CalculatorBtn>
        <div></div>
        <CalculatorBtn onClick={handleNumber}>7</CalculatorBtn>
        <CalculatorBtn onClick={handleNumber}>8</CalculatorBtn>
        <CalculatorBtn onClick={handleNumber}>9</CalculatorBtn>
        <CalculatorBtn onClick={handleSymbole}>-</CalculatorBtn>
        <div></div>
        <CalculatorBtn onClick={handleNumber}>,</CalculatorBtn>
        <CalculatorBtn onClick={handleNumber}>0</CalculatorBtn>
        <CalculatorBtn onClick={handleNumber}>=</CalculatorBtn>
        <CalculatorBtn onClick={handleSymbole}>+</CalculatorBtn>
        <CalculatorBtn onClick={handleReset}>Rest</CalculatorBtn>
      </Grid>
    </AppContainer>
  );
}

export default App;

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 80%;
  max-height: 700px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 3fr 1fr 1fr 1fr 1fr;

  text-align: center;
  color: #fff5e3;

  padding: 2em;
  border-radius: 0.5em;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7),
    -6px -6px 10px rgba(255, 255, 255, 0.5),
    6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
`;
