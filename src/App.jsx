
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Menu from './pages/Menu';
import NotFound from './components/NotFound';
import Proyectos from './pages/Proyectos';
import ListaProyectos from './pages/listaProyectos';
import OlvidarContraseña from './pages/OlvidarContraseña';
import Registrar from './pages/Registrar';
import Perfil from './pages/Perfil';
import Historial from './pages/Historial';
import Calendario from './pages/Calendario';

function App() {

  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/proyectos/listaProyectos' element={<ListaProyectos />} />
        <Route path='/olvidar-contraseña' element={<OlvidarContraseña />} />
        <Route path='/registrar' element={<Registrar />} />
        <Route path="/perfil" element={<Perfil/>} />
        <Route path="/historial" element={<Historial/>} />
        <Route path="/calendario" element={<Calendario/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
