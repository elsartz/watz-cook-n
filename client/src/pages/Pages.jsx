import Home from './home/Home';
import Search from './search/Search';
import Categories from './categories/Categories';
import Fav from './favourites/Fav';
import { Routes, Route } from 'react-router-dom';

export default function pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search/:search' element={<Search />}/>
      <Route path='/' element={<Categories/>} />
      <Route path='/' element={<Fav/>}/>
    </Routes>
  );
}