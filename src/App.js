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

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='productDetail' element={<ProductDetail />} />
            <Route path='shop' element={<Shop />} />
            <Route path='wishlist' element={<Wishlist />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
