import { useState, useEffect } from "react";
import { buscar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import CardCategoria from "../cardcategoria/CardCategoria";
import { CircleLoader } from "react-spinners";

 function ListaCategorias() {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const[categorias, setCategorias] = useState<Categoria[]>([]);

    useEffect(() => {
      buscarCategorias()
    }, [])

    async function buscarCategorias() {

      try{

        setIsLoading(true);

        await buscar('/categorias', setCategorias);

      }catch(error: any){
          console.error("Erro ao buscar categorias:", error);
            
      }finally{
        setIsLoading(false)
      }
      
    }

    return (

      <>
      {
        isLoading &&(
          <div className="flex items-center justify-center w-full h-[70vh]">
            <CircleLoader
                  color="#0d542b"
                  size={100}/>
          </div>
        )
      }
      
      <div className=" flex justify-center w-full my-4">
        <div className=" container flex flex-col">

          {
            (!isLoading && categorias.length == 0) &&(
                  <span className="text-3xl text-center my-8">
                      Nenhuma categoria foi encontrado!
                  </span>
            )
          }

            <div className="grid grid-cols-1 md:grid-cols-2
                            lg:grid-cols-3 gap-8">
                              {
                                categorias.map((categoria) => (
                                    <CardCategoria key={categoria.id} categoria={categoria}/>
                                ))


                              }
                
            </div>
        </div>
        
      </div></>
      
    )
  }


export default ListaCategorias;