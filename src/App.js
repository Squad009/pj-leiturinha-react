
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaseApp from './components/BaseApp';
import { ConteudoProfessorLayout } from './components/conteudo_professor/ConteudoProfessorLayout';
import CriaContaLayout from './components/cria_conto/CriaContoLayout';
import LeiturinhaMain from './components/leiturinha/LeiturinhaMain';

import InicioLayout from './components/inicio/InicioLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BaseApp />}>
          <Route index element={<InicioLayout />} />
          <Route path='criar_conto' element={<CriaContaLayout />} />
          <Route path='conteudo_professor' element={<ConteudoProfessorLayout />} />
          <Route path='/leiturinhas' element={<LeiturinhaMain/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
