import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import type Produto from "../../../models/Produto";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarProduto() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // CORRIGIDO: nome da variável
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const { id } = useParams<{ id: string }>();

  async function buscarProdutoPorId() {
    try {
      setIsLoading(true);
      await buscar(`/produtos/${id}`, setProduto);
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarProdutoPorId();
    }
  }, [id]);

  function retornar() {
    navigate("/produtos");
  }

  async function deletarProduto() {
    setIsLoading(true);

    try {
      await deletar(`/produtos/${id}`);
      ToastAlerta("Produto deletado com sucesso!", 'sucesso');
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      ToastAlerta("Erro ao deletar produto!", 'erro');
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Produto</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o produto a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-green-600 text-white font-bold text-2xl">
          {produto.nome}
        </header>

        <p className="p-8 text-3xl bg-green-50 h-full">
          {produto.nome}
        </p>

        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>

          <button
            className="text-slate-100 bg-green-500 hover:bg-green-600 w-full py-2 justify-center"
            onClick={deletarProduto}
          >
            {isLoading ? (
              <ClipLoader color="#0d542b" size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarProduto;
