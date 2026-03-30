import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CadastrarAlunos from "./pages/CadastrarAlunos";
import Alunos from './pages/Alunos';
import Biblioteca from './pages/Biblioteca';
import Dashboard from './pages/Dashboard';
import CadastrarLivros from "./pages/CadastrarLivros";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (

      <div className={darkMode ? 'tema-escuro' : 'tema-claro'}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/cadastrarAlunos' element={<CadastrarAlunos/>} />
              <Route path='/alunos' element={<Alunos/>} />
              <Route path='/biblioteca' element={<Biblioteca/>} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/cadastrarLivros' element={<CadastrarLivros/>} />
            </Routes>
          </main>
          <Footer/>
      </div>
  );
}

export default App;
