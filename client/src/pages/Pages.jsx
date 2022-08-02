import { Routes, Route } from "react-router-dom";

import Home from './Home'
import Favourites from './Favourites/Favourites'
import FoodDetail from './Detail/FoodDetail';
import NoMatch from './NoMatch';

export default function Pages(){

    return(
        <>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/recipe/:id' element={<FoodDetail />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      </>
    )
}