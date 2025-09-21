import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import {Routes, Route}from "react-router-dom"
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-base-200 transition-colors duration-300'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products/:id' element={<ProductPage/>}/>
      </Routes>
    </div>
  )
}

export default App
