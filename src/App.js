import React, { useEffect, useState } from "react";

import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BaseApp from "./components/BaseApp";
import { ConteudoProfessorLayout } from "./components/conteudo_professor/ConteudoProfessorLayout";
import CriaContaLayout from "./components/cria_conto/CriaContoLayout";
import LeiturinhaMain from "./components/leiturinha/LeiturinhaMain";
import TestComponent from "./components/TestComponent";

import InicioLayout from "./components/inicio/InicioLayout";
import NavigationMain from "./shared/header/NavigationMain";
import SearchMain from "./shared/header/SearchMain";
import Authentication from "./shared/header/Authentication";
import Quizzes from "./pages/Quizzes";
import ConhecaIniciativa from "./pages/ConhecaIniciativa";
import Registrar from "./pages/Registrar";
import Login from "./pages/Login";
import PaginaNaoEncontrada from "./pages/PaginaNaoEncontrada";
import HeaderAppLogin from "./shared/HeaderAppLogin";
import RegistrarEstudante from "./pages/registrar/RegistrarEstudante";
import RegistrarProfessor from "./pages/registrar/RegistrarProfessor";
import HeaderApp from "./shared/HeaderApp";

export default function App() {
  const [auth,setAuth] = useState(false);

  
  useEffect(()=>{
    const isAuth = JSON.parse(localStorage.getItem("login_feito_com_sucesso"));
    if (isAuth) {
      setAuth(true)
    }
  

  },[])

  return (
    <>
    
    <Router>
          {/* { <HeaderAppLogin></HeaderAppLogin> } */}

         {auth && <HeaderApp navigationMain={<NavigationMain />} searchMain={<SearchMain />} authentication={<Authentication />} />}
    <Routes>
      <Route path="/leticia"  element={<TestComponent></TestComponent>}></Route>
      <Route path="/quizzes" element={<Quizzes />} />
      <Route path="/leiturinhas" element={<LeiturinhaMain />} />
      <Route path="/conhecainiciativa" element={<ConhecaIniciativa />} />
      <Route path="/registrar/estudante" element={<RegistrarEstudante />} />
      <Route path="/registrar/professor" element={<RegistrarProfessor />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<InicioLayout/>}></Route>
     
      <Route path="/arearestrita" element={<TestComponent />} />
      
      <Route path="*" element={<PaginaNaoEncontrada />} />


      
      
    </Routes>
    </Router>
    </>
  );
}
