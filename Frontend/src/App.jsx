import react from 'react'
import Home from './pages/Home'
import "./App.css"
import Navbar from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Worksheet from './pages/Worksheet'
import Worksheetpage from './pages/worksheetpage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/worksheet' element={<Worksheet />} />
          <Route path='/worksheet/question' element={<Worksheetpage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
