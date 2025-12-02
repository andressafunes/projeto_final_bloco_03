import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-green-900 text-white px-6 py-4 flex items-center justify-between gap-6">
      
      {/* Logo */}
      <div className="flex items-center">
        <Link to='/'><img
          className="w-20" 
          src="https://ik.imagekit.io/techbloom/produtos_farmacia/3bcc5db6-7739-4bed-8973-c8f287111b8c.png"
          alt="Controle"
        /></Link>
        <p className="px-3 text-3xl font-semibold">
            FARMÁCIA
        </p>
        
      </div>

      {/* Barra de busca centralizada e com espaçamento correto */}
      <div className="flex items-center flex-1 max-w-xl gap-3">
        <input
          type="text"
          id="buscar"
          name="buscar"
          className="bg-white w-full px-4 py-2 rounded-md focus:outline-none text-black"
        />
        <button
          type="submit"
          className="bg-teal-500 px-4 py-2 rounded-md hover:bg-teal-600 transition"
        >
          <MagnifyingGlassIcon size={24} />
        </button>
      </div>

      {/* Navegação e ícones */}
      <div className="flex items-center gap-6 whitespace-nowrap">
        <Link to='/produtos' className="hover:underline">Produtos</Link>
        <Link to='/categorias' className="hover:underline">Categoria</Link>
        <Link to='/cadastrarcategoria' className="hover:underline">Cadastrar Categoria</Link>
        <button><UserIcon size={24} /></button>
        <button><ShoppingCartIcon size={24} /></button>
      </div>
    </div>
  );
}

export default Navbar;
