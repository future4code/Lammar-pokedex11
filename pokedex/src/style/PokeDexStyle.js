import styled from "styled-components";

export const Header = styled.div`
    padding: 0;
    margin: 0;
    width: 100%;
    height: 60px;
    background: black;
    color: yellow;
    border-bottom: 3px solid yellow;
    background-size: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        width: 90px;
        background: none;
        color: yellow;
        border: 1px solid yellow;
        padding: 5px;
        margin-right: 25px;
        border-radius: 50px;
    }

    h1{
        margin-left: 25px
    }
`

export const Video = styled.video`
    width: 100%;
    position: fixed;
   
`