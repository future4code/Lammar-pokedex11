import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex"

const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Pokedex' element={<Pokedex/>}/>
        </Routes>
        </BrowserRouter>
    )
    
}
export default Router