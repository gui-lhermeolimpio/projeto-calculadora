import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 65px;
  background-color: #303134;
  margin-bottom: 1rem;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 24px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);

  input {
    width: 100%;
    height: 55px;
    background-color: #303134;
    border: none;
    border-radius: 10px;
    outline: none;

    color: #f5f5f5;
    font-size: 24px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    display: flex;
    align-items: center;
    padding: 0 10px;
  }
`;
