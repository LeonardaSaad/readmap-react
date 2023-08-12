import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        font-size: 16px;
        background: #1b1e23;
        color: #e6e6e6;
    }
`;