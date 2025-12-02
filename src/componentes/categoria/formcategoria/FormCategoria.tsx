import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategoria() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  // Buscar categoria pelo ID 
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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    });
  }

  // Cadastrar ou atualizar 
  async function salvarCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      // Atualizar categoria existente
      try {
        await atualizar('/categorias', categoria, setCategoria);
        ToastAlerta('A categoria foi atualizada com sucesso!', 'sucesso');
      } catch (error) {
        console.error("Erro ao atualizar categoria:", error);
        ToastAlerta('Erro ao atualizar categoria.', 'erro');
      }

    } else {
      // Cadastrar nova categoria
      try {
        await cadastrar('/categorias', categoria, setCategoria);
        ToastAlerta('A categoria foi cadastrada com sucesso!', 'sucesso');
      } catch (error) {
        console.error("Erro ao cadastrar categoria:", error);
        ToastAlerta('Erro ao cadastrar categoria.', 'erro');
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className='container flex flex-col items-center justify-center mx-auto'>
      <h1 className='text-green-950 font-bold text-4xl text-center my-8'>
        {id === undefined ? 'Cadastrar' : 'Atualizar'} Categoria
      </h1>

      <form 
        className="w-1/2 flex flex-col gap-4"
        onSubmit={salvarCategoria}
      >
        <div className="text-green-950 flex flex-col gap-2">
          <label htmlFor="nome">Nome da Categoria</label>
          <input
            id="nome"
            type="text"
            placeholder="Descreva o nome da categoria"
            name="nome"
            className="border-2 border-green-700 rounded p-2"
            value={categoria.nome ?? ""}
            onChange={atualizarEstado}
          />
        </div>

        <button
          className="rounded text-slate-100 bg-green-500 hover:bg-green-800 
                     w-1/2 py-2 mx-auto flex justify-center"
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
  )
}

export default FormCategoria;
