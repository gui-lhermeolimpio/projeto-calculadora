import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 1rem;
  border: none;
  margin: 5px 5px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #424548;
  flex: 1;

  box-shadow: 0px 3px 19px 0px rgba(0, 0, 0, 0.75);

  cursor: pointer;

  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 15px;
  color: #e8eaed;

  &:hover {
    background-color: #5f6368;
    transition: color, 0.2s;
  }
`;
