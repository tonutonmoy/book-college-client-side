
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'

function App() {


  return (
    <div className='bg-gradient-to-r from-slate-500 to-slate-500  text-white'>
  
      <Navbar></Navbar>
      
      <Outlet></Outlet>
    
    

      <Footer></Footer>
    </div>

  )
}

export default App
