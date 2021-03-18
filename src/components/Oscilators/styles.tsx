import styled from "styled-components";

export const OscContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DialContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
`;

export const OscTitle = styled.h4`
  text-align: center;
`;
