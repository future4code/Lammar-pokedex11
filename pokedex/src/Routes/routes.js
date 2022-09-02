import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex"
import PokeDetails from "../pages/PokeDetail"

const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Pokedex' element={<Pokedex/>}/>
            <Route path='/PokeDetail' element={<PokeDetails/>} />
        </Routes>
        </BrowserRouter>
    )
    
}
export default Router