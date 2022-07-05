import { useContext, useReducer } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import { CartProvider } from './context/CartContext'
import { ThemeContext } from './context/ThemeContext'


function App() {
  const {isLight} = useContext(ThemeContext);

  return (                         //wraping the app in Provider.
    <div className={`App ${isLight ? "light" : "dark"}`}>
              
      <Navbar/>
      <Body/>
      
      </div>
  )
}

export default App
