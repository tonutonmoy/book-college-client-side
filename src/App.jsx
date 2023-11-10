
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import { useContext } from 'react'
import { AuthContext } from './Provider/AuthProvider'

function App() {

  const {mode}=useContext(AuthContext)

  return (
    <div className={`${ mode? 'bg-black/90 text-white':'bg-gradient-to-r from-slate-500 to-slate-500  text-white'}`}>
  
      <Navbar></Navbar>
      
      <Outlet></Outlet>
    
    

      <Footer></Footer>
    </div>

  )
}

export default App
