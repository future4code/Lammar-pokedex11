import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Video } from "../style/PokeDexStyle";
import Wallpaper  from '../wallpaper/video.mp4'

const Pokedex = () =>{
    const navigate = useNavigate()
    const goToHome = () =>{
        navigate('/')
    }
    return(
        <>
        <Header>
        <h1>Pokemon</h1>
        <button onClick={goToHome}>Home</button>
        </Header>
        <Video  muted loop autoPlay>
        <source src={Wallpaper} type="video/mp4"></source>
        </Video>
        
        </>
        
        )
}
export default Pokedex