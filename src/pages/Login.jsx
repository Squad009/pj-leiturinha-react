import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


export default function Login(){

    const [registro,setregistro]= useState("");
    const [password, setpassword] = useState("");
    const [msg,setmsg]=useState("");
    const validarAcesso = (el)=>{
        

       const registroGravado = localStorage.getItem(registro);
       if(!registroGravado){
        setmsg(()=>"Usuário não localizado.")
       }else{
        localStorage.setItem("login_feito_com_sucesso",true)
        setmsg("Login realizado com sucesso")
       }


    }
    
    return (

       
        <section class="">
            <div className="containter-fluid p-3 mb-5  w-50" style={{ backgroundImage: "url('../img/fundo-criativo-criar-conto.webp')" }}>
                <div className="fundo_criativo   ">

                    <form class="col-12 row ">
                        <div class="form-group px-3 col-6">
                            <label>Email address</label>
                            <input type="email" class="form-control" id="mailuser" value={registro} aria-describedby="emailHelp" onChange={(e)=>setregistro(e.target.value)} placeholder="Digite seu e-mail" />

                        </div>

                        <div class="form-group px-3 col-6">
                            <label >Senha</label>
                            <input type="password" class="form-control" id="mailpwd" value={password} onChange={(e)=>setpassword(e.target.value)} aria-describedby="emailHelp" placeholder="Por favor, informar senha." />
                        </div>

                        <div class="d-flex justify-content-center p-2 col-12">
                            <button class="btn btn-primary" onClick={validarAcesso} >Validar Acesso</button>
                        </div>
                         <div className='alert alert-primary'>
                            <span>{msg}</span>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}