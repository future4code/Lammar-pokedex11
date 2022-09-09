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
    margin-top: 100px;
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(2, auto);
    align-items: center;
    grid-column-gap:250px;
    grid-row-gap: 30px;

    .img{
        display: flex;
        width: 300px;
        justify-content: space-around;
        grid-area: 1 / 2 / 2 / 3;

        img{
           width: 2000px;
        }
    }
          
` 

export const ContainerHabildade = styled.div`
    width: 300px;
    background-color: black;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 20px;
    border: 1px solid yellow;
    grid-area: 2 / 3 / 3 / 4;
    

    h2{
        padding: 5px;
        color: yellow;
        font-style: italic;
        border-bottom: 1px solid yellow;
    }

    .habilidade{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 10px;
        justify-content: space-around;
    }
`

export const ContainerPower = styled.div`
    width: 300px;
    background-color: black;
    text-align: center;
    border-radius: 20px;
    border: 1px solid yellow;
    grid-area: 2 / 2 / 3 / 3;

    h2{
        padding: 5px;
        color: yellow;
        font-style: italic;
        border-bottom: 1px solid yellow;
    }

    .power{
        margin: 10px;
        display: flex;
        flex-direction: column;

    }
`

export const ContainerType = styled.div`
    width: 300px;
    background-color: black;
    text-align: center;
    border-radius: 20px;
    border: 1px solid yellow;
    grid-area: 1 / 3 / 2 / 4;

    h2{
        padding: 5px;
        color: yellow;
        font-style: italic;
        border-bottom: 1px solid yellow;
    }

    .type{
        margin: 10px;
        display: flex;
        justify-content: space-around;
    }
`

export const MyCard = styled.div`
    display: flex;
    justify-content: space-between;

    p{
        font-size: 21px;
        color: yellow;
        font-style: italic;
        margin: 0 0 5px 0;
    }
`


export const Card = styled.div`
    display: flex;
    justify-content: space-between;

    p{
        font-size: 21px;
        color: yellow;
        font-style: italic;
        margin: 0 0 5px 0;
    }
`


