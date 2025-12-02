import { Link } from "react-router-dom";
import type Produto from "../../../models/Produto";
import { PencilIcon, TrashIcon } from "@phosphor-icons/react";
import { ToastAlerta } from "../../../utils/ToastAlerta";

interface CardProdutoProps {
    produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
    return (
        <div className="w-80 border rounded-2xl overflow-hidden shadow-md bg-green-50 flex flex-col">

            {/* Ícones de Editar / Deletar */}
            <div className="flex justify-end gap-3 p-4">
                <Link to={`/editarproduto/${produto.id}`}>
                    <PencilIcon size={22} className="cursor-pointer hover:text-green-500" />
                </Link>

                <Link to={`/deletarproduto/${produto.id}`}>
                    <TrashIcon size={22} className="cursor-pointer hover:text-red-600" />
                </Link>
            </div>

            {/* Conteúdo */}
            <div className="px-6 pb-6 text-center">

                {/* IMAGEM */}
                <img
                    src={produto.foto}
                    alt={produto.nome}
                    className="w-full h-40 object-contain mx-auto"
                />

                {/* NOME */}
                <h2 className="text-lg font-semibold text-green-800 mb-2">
                    {produto.nome}
                </h2>

                {/* PREÇO */}
                <p className="text-2xl font-bold text-green-900 mb-2">
                    R$ {Number(produto.preco).toFixed(2).replace(".", ",")}
                </p>

                {/* CATEGORIA */}
                <p className="italic text-green-600">
                    Categoria: {produto.categoria?.nome ?? "Sem Categoria"}
                </p>
            </div>

            {/* Botão */}
            <button
                className="flex items-center justify-center w-full py-3 text-slate-50 text-sm font-medium tracking-wide uppercase bg-green-500 hover:bg-green-800 transition-colors duration-300"
                onClick={() => ToastAlerta('Função em Desenvolvimento!', 'info')}
            >
                Comprar
            </button>

        </div>
    );
}

export default CardProduto;
