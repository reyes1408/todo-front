import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-red-700 mb-4">404 Not Found</h1>
                <p className="text-2xl text-gray-600">
                    La página que estás buscando no existe. ¡Regresa a la página de inicio!
                </p>
                <Link to="/">
                    <p className="mt-4 text-blue-500 hover:underline">Ir a la página de inicio</p>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
