import styled from "styled-components";

export const Container = styled.div`
    cursor: url(http://www.rw-designer.com/cursor-extern.php?id=165731), default;
`


export const Header = styled.div`
    padding: 0;
    margin: 0;
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
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
        cursor: url(http://www.rw-designer.com/cursor-extern.php?id=8085), default;
    }

    h1{
        margin-left: 25px;
        font-style: italic;
    }
`

export const Video = styled.video`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
   
`
export const ContainerCards = styled.div`
    margin-top: 70px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, auto);
    justify-content: space-around;
    align-items: center;

    
`


export const ContainerButtons = styled.div`
    display: flex;
    margin: 5px;

    button{
        margin: 5px;
        padding: 2px;
        cursor: url(http://www.rw-designer.com/cursor-extern.php?id=8085), default;
        background: linear-gradient(0deg, rgba(173,154,6,1) 3%, rgba(251,238,140,1) 44%, rgba(173,154,6,1) 98%);
        border-radius: 10px;
        font-size: 12px;
        font-style: italic;
        font-weight: bold;
        border: none;
    }
    
`

export const Card = styled.div`
    margin: 10px;
    background-color: rgba(0,0,0,0.4822303921568627);
    border-radius: 10px;
    border: 2px solid yellow;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    img{
        margin: 10px;
        padding: 0;
        width: 180px;
        border: 2px solid yellow;
        border-radius: 10px;
        background: linear-gradient(0deg, rgba(172,172,172,1) 0%, rgba(255,255,255,1) 44%, rgba(255,255,255,1) 55%, rgba(172,172,172,1) 100%);
    }

    p{
        font-size: 21px;
        color: yellow;
        font-style: italic;
        margin: 0 0 5px 0;
    }
`
