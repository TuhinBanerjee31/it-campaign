import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './custom/Navbar'
import Footer from './custom/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
