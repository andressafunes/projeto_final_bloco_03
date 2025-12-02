import { useState, useEffect } from "react";
import { buscar } from "../../../services/Service";
import { CircleLoader } from "react-spinners";
import type Produto from "../../../models/Produto";
import CardProduto from "../cardproduto/CardProduto";

 function ListaProdutos() {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const[produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
      buscarProdutos()
    }, [])

    async function buscarProdutos() {

      try{

        setIsLoading(true);

        await buscar('/produtos', setProdutos);

      }catch(error: any){
          console.error("Erro ao buscar produtos:", error);
            
      }finally{
        setIsLoading(false)
      }
      
    }

    return (

      <>
      {
        isLoading &&(
          <div className="flex justify-center w-full my-4">
            <CircleLoader
                  color="#0d542b"
                  size={100}/>
          </div>
        )
      }
      
      <div className="flex justify-center w-full my-8">
        <div className="container flex flex-col">

          {
            (!isLoading && produtos.length == 0) &&(
                  <span className="text-3xl text-center my-8">
                      Nenhum produto foi encontrado!
                  </span>
            )
          }

            <div className="grid grid-cols-1 md:grid-cols-2
                            lg:grid-cols-4 gap-4">
                              {
                                produtos.map((produto) => (
                                    <CardProduto key={produto.id} produto={produto}/>
                                ))


                              }
                
            </div>
        </div>
        
      </div></>
      
    )
  }


export default ListaProdutos;