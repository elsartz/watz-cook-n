import Search from '../../components/search/Search';
import Categories from '../../components/categories/Categories';
import Navbar from '../../components/nav/Navbar';

export default function Home (){
    return ( 
    <div>
            <Navbar />
            <Categories />
            <Search />
    </div>
    
    )
}