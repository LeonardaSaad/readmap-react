import React, { Component } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const container = css`
  width: 75vw;
  height: 75vh;
  border-radius: 18px;
  background: #e0e0e0;
  box-shadow: 26px 26px 51px #a8a8a8, -26px -26px 51px #ffffff;
  display: flex;
  flex-direction: row;
`;

const input = css`
  color: red;
  background: #000;
  width: 100vw;
  height: 20vh;
`;

const Button = styled.button`
  color: white;
  background-color: #7e1dec;
`;

export class Login extends Component {
  render() {
    return (
      <div css={container}>
        <div css={input}>Conecte-se e aproveite as novidades</div>
        <div className="login">
          input email input senha
          <Button>Conectar</Button>
        </div>
      </div>
    );
  }
}

export default Login;
