import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const CardUser = styled.div`
  background-color: #242526;
  padding: 15px;
  width: 350px;
  border-radius: 4px;
  transition: all 0.2s;

  & + & {
    margin-top: 16px;
  }
`;
