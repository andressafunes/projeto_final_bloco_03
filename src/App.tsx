
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
              {/* <Route path="/categorias" element={<ListaCategorias/>}/>
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria/>}/>
              <Route path="/produtos" element={<ListaProdutos/>}/>
              <Route path="/cadastrarproduto" element={<FormProduto/>}/>
              <Route path="/editarproduto/:id" element={<FormProduto/>}/>
              <Route path="/deletarproduto/:id" element={<DeletarProduto/>}/> */}

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
