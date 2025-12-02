import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";

function DeletarCategoria() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  // 🔍 Busca categoria por ID (sem token)
  async function buscarCategoriaPorId() {
    try {
      setIsLoading(true);
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      console.error("Erro ao buscar categoria:", error);
    }finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId();
    }
  }, [id]);

  function retornar() {
    navigate("/categorias");
  }

  // 🗑️ Deletar categoria (sem token)
  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);
      alert('Categoria deletada com sucesso!');
    } catch (error) {
      console.error("Erro ao deletar categoria:", error);
      alert('Erro ao deletar categoria!');
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-green-950 font-bold text-4xl text-center my-4">Deletar Categoria</h1>

      <p className="text-green-950 text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-green-600 text-white font-bold text-2xl">
          Categoria
        </header>

        <p className="text-green-950 p-8 text-3xl bg-green-50 h-full">{categoria.nome}</p>

        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>

          <button
            className="text-slate-100 bg-green-500 hover:bg-green-600 w-full py-2 justify-center"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <ClipLoader
                  color="#0d542b"
                  size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
