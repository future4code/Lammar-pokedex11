import React, { useEffect, useState } from "react";
import Wallpaper  from '../wallpaper/video.mp4'
import { useNavigate } from 'react-router-dom';
import { Card, Container, ContainerCards, Header, Video } from "../style/PokeDetailStyle";
import axios from "axios";



const PokeDetails = () =>{
    const navigate = useNavigate()
    const goToHome = () =>{
        navigate('/')
    }
    
    
    const [habilidade, setHabilidade] = useState()
    const CardHabilidade = habilidade && habilidade.map(item => {
        return (
            <Card>
            <p>{item.ability.name}</p>
            </Card>
        )
    })

    useEffect(()=>{
        const url = localStorage.getItem('url')

        axios.get(url).then(response => {
            setHabilidade(response.data.abilities)
        })
    },[])
    

    console.log(habilidade)

    return (
    <Container>
     <Header>
        <h1>Pokemon</h1>
        <button onClick={goToHome}>Home</button>
        </Header>
        <Video  muted loop autoPlay>
        <source src={Wallpaper} type="video/mp4"></source>
    </Video>
    <ContainerCards>
    {CardHabilidade}
    </ContainerCards>
    </Container>
    )
}

export default PokeDetails