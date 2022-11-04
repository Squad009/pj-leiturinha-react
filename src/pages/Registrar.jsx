import React from 'react';
import { useState } from 'react';


export default function Registrar() {

    const [registro,setregistro]= useState("");
    const [password, setpassword] = useState("");

    const confirmarRegistro = (el)=>{
        console.log(registro);
        console.log(password);

        localStorage.setItem(registro, password);
        
        setpassword("");
        setregistro("");
    }
    return (

        <section class="">
            <div className="containter-fluid p-3 mb-5  w-50" style={{ backgroundImage: "url('../img/fundo-criativo-criar-conto.webp')" }}>
                <div className="fundo_criativo   ">

                    <form class="col ">
                        <div class="form-group px-3">
                            <label>Email address</label>
                            <input type="email" class="form-control" id="mailuser" value={registro} aria-describedby="emailHelp" onChange={(e)=>setregistro(e.target.value)} placeholder="Digite seu e-mail" />

                        </div>

                        <div class="form-group px-3">
                            <label >Senha</label>
                            <input type="password" class="form-control" id="mailpwd" value={password} onChange={(e)=>setpassword(e.target.value)} aria-describedby="emailHelp" placeholder="Por favor, informar senha." />
                        </div>

                        <div class="d-flex justify-content-center p-3">
                            <button class="btn btn-primary" onClick={confirmarRegistro} >Confirma</button>
                        </div>


                    </form>
                </div>
            </div>
        </section>
    )
}