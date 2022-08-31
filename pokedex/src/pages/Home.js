import React from "react";
import { useNavigate } from "react-router-dom";
import { Header, Video } from "../style/HomeStyle";
import Wallpaper  from '../wallpaper/video.mp4'


const Home =() =>{
    const navigate = useNavigate()

    const goToPokedex = () =>{
        navigate('/Pokedex')
    }

    return(
        <>
        <Header>
        <h1>Pokemon</h1>
        <button onClick={goToPokedex}>Pokedex</button>
        </Header>
        <Video  muted loop autoPlay>
        <source src={Wallpaper} type="video/mp4"></source>
        </Video>
        
        </>
        )
}
export default Home