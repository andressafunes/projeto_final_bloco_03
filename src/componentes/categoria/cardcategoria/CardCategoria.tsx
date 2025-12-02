import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps{
    categoria: Categoria
}

function CardCategoria({categoria}: CardCategoriaProps) {
    return (
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-green-800 text-white font-bold text-2xl">Categoria</header>
        <p className="text-green-950 p-8 text-3xl bg-green-50 h-full">{categoria.nome}</p>

        <div className="flex">
            <Link to={`/editarcategoria/${categoria.id}`} className="w-full text-slate-100 bg-green-500 hover:bg-green-800 
                            flex items-center justify-center py-2">
                <button>Editar</button>
            </Link>

            <Link to={`/deletarcategoria/${categoria.id}`} className="w-full text-slate-100 bg-red-400 hover:bg-red-700 
                            flex items-center justify-center py-2">
                <button>Deletar</button>
            </Link>
        </div>
        
      </div>
    )
  }


export default CardCategoria;