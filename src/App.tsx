import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './custom/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </>
  )
}

export default App
