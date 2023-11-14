
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Proyectos from './pages/Proyectos';
import ListaProyectos from './pages/listaProyectos';
import NotFound from './components/NotFound';

function App() {

  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Proyectos />} />
        <Route path='/proyectos' element={<ListaProyectos />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
