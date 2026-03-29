import {Routes, route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <route path="/" element={<Home />} />
        <route path="/products" element={<Products />} />
        <route path="/cart" element={<Cart />} />
        <route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}