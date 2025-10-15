import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/collection'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Cart from './pages/Cart'
import PlaceOder from './pages/PlaceOder'
import Oders from './pages/Oders'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeOder" element={<PlaceOder />} />
        <Route path="/oders" element={<Oders />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
