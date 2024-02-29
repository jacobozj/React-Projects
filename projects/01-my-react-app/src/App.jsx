//import { useState } from 'react'
//import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'

function App() {
  //fragment para más de un componente
  return (
    <> 
      <Header/>
      <Food/>
      <Card/>
      <Footer/>
    </>
  )
  
}

export default App
