import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { ShopCategory } from './Pages/ShopCategory';
import { Shop } from './Pages/Shop';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { Login } from './Pages/Login';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div>
      {/* Background Effect */}
      {/* <div className='fixed inset-0 -z-10'>
        <div className="absolute top-0 z-[-2] h-screen w-screen  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div> */}
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path='/' element={<Shop />} />
          <Route path='/:category' element={<ShopCategory />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
