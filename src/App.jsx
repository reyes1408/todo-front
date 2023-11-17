
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Menu from './pages/Menu';
import NotFound from './components/NotFound';
import Proyectos from './pages/Proyectos';
import ListaProyectos from './pages/listaProyectos';
import OlvidarContraseña from './pages/OlvidarContraseña';
import Registrar from './pages/Registrar';

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
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
