import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, ContainerButtons, ContainerCards, Header, Video } from "../style/HomeStyle";
import Wallpaper  from '../wallpaper/video.mp4'
import URL_GET from "../components/URL_GET";
import useRequestData from "../hooks/UseRequestData";
import { useState } from "react";
import axios from "axios";



const Home =() =>{
    const navigate = useNavigate()

    const goToPokedex = () =>{
        navigate('/Pokedex')
    }

    



    const [data]=useRequestData(URL_GET)
    // const info= []

    const CardPOkemon =  data && data.map((item)=> { 
        const goToPokeDetails = () => {
            navigate('/PokeDetail')
            localStorage.setItem('url', item.url)   
        }

        const Img = () =>{
            const [img, setImg] = useState('')
            axios.get(item.url).then(response => {
                setImg(response.data.sprites.front_default)
            })
            return(
                <img src={img} alt='imagem-pokemon'/>
            )
        }
      
        return (
            <Card key={item.name}>
            <Img/>
            <p>{item.name}</p>
            <ContainerButtons>
            <button>Adicionar a Pokédex</button>
            <button onClick={goToPokeDetails} >Ver Detalhes</button>
            </ContainerButtons>
            </Card>
        )
    }) 
    


    return(
        <Container>
        <Header>
        <h1>Pokemon</h1>
        
        <button onClick={goToPokedex}>Pokedex</button>
        </Header>
        <Video  muted loop autoPlay>
        <source src={Wallpaper} type="video/mp4"></source>
        
        </Video>
        <ContainerCards>
        {CardPOkemon}
        </ContainerCards>
        
        </Container>
        )
}
export default Home