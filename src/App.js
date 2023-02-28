import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Wishlist from './pages/Wishlist';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Payments from './pages/Payments';
import Returns from './pages/Returns';
import FAQ from './pages/FAQ';
import ScrollToTop from './pages/ScrollToTop';
import Order from './pages/Order';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='productDetail' element={<ProductDetail />} />
            <Route path='shop' element={<Shop />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='cart' element={<Cart />} />
            <Route path='payments' element={<Payments />} />
            <Route path='returns' element={<Returns />} />
            <Route path='faq' element={<FAQ />} />
            <Route path='order' element={<Order />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;