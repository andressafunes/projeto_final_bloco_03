
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './componentes/navbar/Navbar'
import Home from './pages/Home'
import Footer from './componentes/footer/Footer'
import ListaCategorias from './componentes/categoria/listacategoria/ListaCategegoria'
import FormCategoria from './componentes/categoria/formcategoria/FormCategoria'
import DeletarCategoria from './componentes/categoria/deletarcategoria/DeletarCategoria'
import ListaProdutos from './componentes/produto/listaprodutos/ListaProdutos'
import FormProduto from './componentes/produto/formproduto/FormProduto'
import DeletarProduto from './componentes/produto/deletarproduto/DeletarProduto'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <>
    <ToastContainer />
      <BrowserRouter>
          <Navbar />
          <div className="min-h-[70vh]">
            <Routes>              
              <Route path="/" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias/>}/>
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria/>}/>
              <Route path="/produtos" element={<ListaProdutos/>}/>
              <Route path="/cadastrarproduto" element={<FormProduto/>}/>
              <Route path="/editarproduto/:id" element={<FormProduto/>}/>
              <Route path="/deletarproduto/:id" element={<DeletarProduto/>}/>

            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
