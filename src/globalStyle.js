import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;

    }

    body{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #D90049;
        height: 100vh;
    }

    .container{
        padding: 80px 20px;
        border-radius: 20px;
        background-color: #f4f4f4;
        
    }
    .container input,button{
        padding: 10px;
        margin-top: 40px;
    }

    .container img{
        width: 80px;
        display: block;
        margin: auto;
    }
    .information{
        margin-top: 20px;
    }
`