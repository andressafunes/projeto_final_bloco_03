import Popup from "reactjs-popup";
import FormProduto from "../formproduto/FormProduto"

function ModalProduto(){
    return(
        <>
            <Popup
                trigger={
                    <button className="text-green-950 border rounded px-4 py-2 hover:bg-white hover:text-green-800">
                        Novo Produto
                    </button>
                }
                modal
                contentStyle={{
                    width: "40%",  
                    maxWidth: "90%",  
                    height: "80%",       
                    borderRadius: '1rem',
                    paddingBottom: '2rem',
                    backgroundColor: 'white'
                }}
            >
                <FormProduto />
            </Popup>
        </>
    );
}
export default ModalProduto;