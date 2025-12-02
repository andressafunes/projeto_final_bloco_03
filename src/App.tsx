
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './componentes/navbar/Navbar'
import Home from './pages/Home'
import Footer from './componentes/footer/Footer'

function App() {


  return (
    <>
      <BrowserRouter>
          <Navbar />
          <div className="min-h-[70vh]">
            <Routes>              
              <Route path="/" element={<Home />} />           
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
