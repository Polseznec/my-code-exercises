import styled from "styled-components";

export const Screen = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 5;
  color: grey;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;

  padding: 2em;
  margin: 1%;
  border-radius: 0.5em;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7),
    -6px -6px 10px rgba(255, 255, 255, 0.5),
    6px 6px 8px rgba(255, 255, 255, 0.075), 6px 6px 10px rgba(0, 0, 0, 0.15);
`;