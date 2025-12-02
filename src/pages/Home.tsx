
function Home() {

    return (
        <>
        
    
            <div

                className="bg-green-200 flex justify-center  min-90vhr"
            >
                {/* Grid que divide a tela em duas colunas */}
                <div
                    className="container grid grid-cols-2 text-green-950"
                >
                    {/* Coluna da Esquerda */}
                    <div
                        className="flex flex-col gap-4 items-center justify-center py-4"
                    >
                        <h2
                            className="text-5xl font-bold"
                        >Seja Bem Vinde!</h2>
                        <p
                            className="text-xl"
                        >Aqui você encontra Medicamento e Cosméticos!</p>

                        {/* Link/Botão */}
                        <div
                            className="flex justify-around gap-4"
                        >
                            {/* <ModalProduto /> */}
                        </div>
                    </div>

                    {/* Coluna da Direita */}
                    <div
                        className="flex justify-center items-center"
                    >
                        <img
                            src="https://ik.imagekit.io/techbloom/produtos_farmacia/Home.png"
                            alt="Imagem da Pagina Home"

                            className="w-96 h-96"
                        />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home
