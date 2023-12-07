
import imgConversation from '../assets/conversacion.png'

const BotonFlotante = ({ openModalChat }) => {
    return (
        <div className="fixed bottom-3 right-6">
            <button
                className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-3 rounded-full shadow-xl focus:outline-none focus:shadow-outline"
                onClick={openModalChat}
            >
                <img className="w-5 h-5" src={imgConversation} />
            </button>
        </div>
    );
}

export default BotonFlotante;
