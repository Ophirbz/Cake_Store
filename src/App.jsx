import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Cart from './pages/Cart'
import { HashRouter, Routes, Route } from 'react-router-dom'

import { CartProvider } from './context/CartContext'



function App() {


  return (
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </HashRouter>
    </CartProvider>
  )
}

export default App
