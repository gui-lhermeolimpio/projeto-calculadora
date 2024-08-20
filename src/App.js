import { Container, Screen, Row } from "./styles";
import Input from "./components/Input/input";
import Button from "./components/Button/button";
import { useState } from "react";

const App = () => {
  const [actionedNumber, setActionedNumber] = useState(""); // Inicializa como string vazia
  const [firstNumber, setFirstNumber] = useState("");
  const [operation, setOperation] = useState("");

  const handleAddNumber = (number) => {
    setActionedNumber((prev) => {
      if (number === "," && prev.includes(",")) {
        return prev;
      }
      return prev === "0" && number !== "," ? number : prev + number;
    });
  };

  const handleOnClear = () => {
    setActionedNumber("");
    setFirstNumber("");
    setOperation("");
  };

  const handleOnBackspace = () => {
    setActionedNumber((prevDisplay) => prevDisplay.slice(0, -1) || "");
  };

  const handleOperation = (op) => {
    if (firstNumber === "") {
      setFirstNumber(actionedNumber);
      setActionedNumber("");
    } else if (operation) {
      handleEqual(); // Calcula o resultado da operação anterior
    }
    setOperation(op);
  };

  const handleSum = () => {
    if (firstNumber === "") {
      setFirstNumber(actionedNumber);
      setActionedNumber("");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(actionedNumber);
      setActionedNumber(String(sum));
      setOperation("");
    }
  };

  const handleEqual = () => {
    if (firstNumber !== "" && operation !== "" && actionedNumber !== "") {
      // eslint-disable-next-line default-case
      switch (operation) {
        case "+":
          handleSum();
          break;
        case "-":
          handleSub();
          break;
        case "*":
          handleMul();
          break;
        case "/":
          handleDiv();
          break;
        default:
          break;
      }
    }
  };

  const handleSub = () => {
    if (firstNumber === "") {
      setFirstNumber(actionedNumber);
      setActionedNumber("");
      setOperation("-");
    } else {
      const result = Number(firstNumber) - Number(actionedNumber);
      setActionedNumber(String(result));
      setOperation("");
    }
  };

  const handleMul = () => {
    if (firstNumber === "") {
      setFirstNumber(actionedNumber);
      setActionedNumber("");
      setOperation("*");
    } else {
      const result = Number(firstNumber) * Number(actionedNumber);
      setActionedNumber(String(result));
      setOperation("");
    }
  };

  const handleDiv = () => {
    if (firstNumber === "") {
      setFirstNumber(actionedNumber);
      setActionedNumber("");
      setOperation("/");
    } else {
      const result = Number(firstNumber) / Number(actionedNumber);
      setActionedNumber(String(result));
      setOperation("");
    }
  };

  const getDisplayValue = () => {
    if (operation) {
      return `${firstNumber} ${operation} ${actionedNumber}`;
    }
    return actionedNumber;
  };

  return (
    <>
      <Container>
        <Screen>
          <Input value={getDisplayValue()} />
          <Row>
            <Button label="CE" onClick={handleOnClear} />
            <Button label="<" onClick={handleOnBackspace} />
            <Button label="+" onClick={() => handleOperation("+")} />
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber("7")} />
            <Button label="8" onClick={() => handleAddNumber("8")} />
            <Button label="9" onClick={() => handleAddNumber("9")} />
            <Button label="-" onClick={() => handleOperation("-")} />
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber("4")} />
            <Button label="5" onClick={() => handleAddNumber("5")} />
            <Button label="6" onClick={() => handleAddNumber("6")} />
            <Button label="*" onClick={() => handleOperation("*")} />
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber("1")} />
            <Button label="2" onClick={() => handleAddNumber("2")} />
            <Button label="3" onClick={() => handleAddNumber("3")} />
            <Button label="/" onClick={() => handleOperation("/")} />
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber("0")} />
            <Button label="." onClick={() => handleAddNumber(".")} />
            <Button label="=" onClick={handleEqual} />
          </Row>
        </Screen>
      </Container>
    </>
  );
};

export default App;
