import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import type Produto from "../../../models/Produto";
import type Categoria from "../../../models/Categoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormProduto() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({ id: 0, nome: "" });
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const { id } = useParams<{ id: string }>();

  async function buscarProdutoPorId(id: string) {
    try {
      setIsLoading(true);
      await buscar(`/produtos/${id}`, setProduto);
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      console.error("Erro ao buscar categoria:", error);
    }
  }

  async function buscarCategorias() {
    try {
      await buscar(`/categorias`, setCategorias);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  }

  useEffect(() => {
    buscarCategorias();

    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto(prev => ({
      ...prev,
      categoria: categoria,
    }));
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  function retornar() {
    navigate('/produtos');
  }

  async function gerarNovoProduto(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        await atualizar('/produtos', produto, setProduto);
        ToastAlerta('Produto atualizado com sucesso!', 'sucesso');
      } else {
        await cadastrar('/produtos', produto, setProduto);
        ToastAlerta('Produto cadastrado com sucesso!', 'sucesso');
      }
    } catch (error) {
      console.error("Erro:", error);
      ToastAlerta('Erro ao salvar produto.', 'erro');
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className='container flex flex-col w-full mx-auto items-center ' >
      <h1 className='text-green-950 text-4xl text-center my-8'>
        {id === undefined ? 'Cadastrar' : 'Editar'} Produto
      </h1>

      <form className="w-1/2 flex flex-col gap-4" 
            onSubmit={gerarNovoProduto}>
        
        {/* Nome */}
        <div className="text-green-950 flex flex-col gap-2">
          <label htmlFor="nome">Nome do Produto</label>
          <input
            id="nome"
            type="text"
            name="nome"
            placeholder="Insira o nome"
            className="border-2 border-green-700 rounded p-2"
            value={produto.nome ?? ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        {/* Preço */}
        <div className="text-green-950 flex flex-col gap-2">
          <label htmlFor="preco">Preço</label>
          <input
            id="preco"
            type="number"
            name="preco"
            placeholder="Insira o preço"
            className="border-2 border-green-700 rounded p-2"
            value={produto.preco ?? ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        {/* Foto */}
        <div className="text-green-950 flex flex-col gap-2">
          <label htmlFor="foto">Foto</label>
          <input
            id="foto"
            type="text"
            name="foto"
            placeholder="URL da foto"
            className="border-2 border-green-700 rounded p-2"
            value={produto.foto ?? ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        {/* Categoria */}
        <div className="text-green-950 flex flex-col gap-2">
          <p>Categoria</p>

          <select
            id="categoria"
            className="border-2 border-green-700 rounded p-2"
            onChange={(e) => buscarCategoriaPorId(e.target.value)}
          >
            <option value="">Selecione uma Categoria</option>

            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nome}
              </option>
            ))}
          </select>
        </div>

        {/* Botão */}
        <button
          className="rounded text-slate-100 bg-green-500 hover:bg-green-800 
                     w-1/2 py-2 mx-auto max-w-xl mt-10 mb-32 flex justify-center "
          type="submit"
        >
          {isLoading ? (
            <ClipLoader color="#0d542b" size={24} />
          ) : (
            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormProduto;
