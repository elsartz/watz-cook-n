import Pages from './pages/Pages';
import Catergories from './components/categories/Categories.jsx';
import Search from './components/search/Search';
import Navbar from './components/nav/Navbar';
import Slideshow from './components/slideshow/Slideshow';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
      <Catergories />
      <Search />
      <Slideshow />
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;

