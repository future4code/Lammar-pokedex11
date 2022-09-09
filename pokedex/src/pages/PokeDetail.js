import React, { useEffect, useState } from "react";
import Wallpaper  from '../wallpaper/video.mp4'
import { useNavigate } from 'react-router-dom';
import { Card, Container, ContainerCards, ContainerHabildade, ContainerPower, ContainerType, Header, MyCard, Video, } from "../style/PokeDetailStyle";
import axios from "axios";



const PokeDetails = () =>{
    const navigate = useNavigate()
    const goToHome = () =>{
        navigate('/')
    }
    
    
    const [habilidade, setHabilidade] = useState()
    const [img, setImg] = useState()
    const [power,  setPower] = useState()
    const [type, setType] = useState()

  

    const CardHabilidade = habilidade && habilidade.map(item => {
        return (
            <MyCard>
            <p>{item.ability.name}</p>
            </MyCard>
        )
    })

    const CardPower = power && power.map(item => {
        return (
            <Card>
                <p>{item.stat.name}</p>
                <p>{item.base_stat}</p>
            </Card>
        )
    })

    const CardType = type && type.map(item => {
        return (
            <Card>
                <p>{item.type.name}</p>
            </Card>
        )
    })



    useEffect(()=>{
        const url = localStorage.getItem('url')
        axios.get(url).then(response => {
            console.log(response.data)
            setHabilidade(response.data.abilities)
            setImg(response.data.sprites)
            setPower(response.data.stats)
            setType(response.data.types)
        })
    },[])
    

    console.log(power)


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
    
    <div className="img">
        <img src={img && img.front_default} alt='front-img' />
        <img src={img && img.back_default} alt='back-img' />
    </div>

    <ContainerHabildade>
    <h2>Habilidades</h2>
    <div className="habilidade">
    {CardHabilidade}
    </div>
    </ContainerHabildade>
    
    <ContainerPower>
        <h2>Power</h2>
        <div className="power">
        {CardPower}
        </div>
    </ContainerPower>
    
    <ContainerType>
        <h2>Tipo</h2>
        <div className="type">
        {CardType}
        </div>
    </ContainerType>

    </ContainerCards>
    </Container>
    )
}

export default PokeDetails