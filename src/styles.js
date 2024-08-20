import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: #121212;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Screen = styled.div`
  background-color: #262627;
  width: 25%;
  min-height: 350px;
  padding: 0.6rem;

  border-radius: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
