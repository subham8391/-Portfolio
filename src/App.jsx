import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/contact/Contact'
function App() {
 

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='portfolio' element={<Portfolio />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Routes>
    </Router>
  )
}

export default App
