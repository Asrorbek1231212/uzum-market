import './App.css';
import SubHeader from './components/sub-header/SubHeader';
import Navbar from './components/navbar/Navbar';
import Home from "./router/home/Home"
import Login from "./router/login/Login"
import Wishes from "./router/wishes/Wishes"
import Cart from "./router/cart/Cart"
import { Routes,Route } from 'react-router-dom';
import NavbarButom from './components/navbar-bottom/NavbarButom';
import Footer from './components/footer/Footer';
import Notfound from './components/404/Notfound';
import { PRODUCTS } from './static';
function App() {
  return (
    <div className="App">
      <SubHeader/>
    <Navbar data={PRODUCTS}/>
    <NavbarButom/>
    <Routes>
      <Route path='/' element={<Home data={PRODUCTS}/>}/>
      <Route path='/login' element={<Login/>} />
      <Route  path='/wishes' element={<Wishes/>}/>
      <Route  path='/cart' element={<Cart/>}/>
      <Route  path='/*' element={<Notfound/>}/>
      
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
