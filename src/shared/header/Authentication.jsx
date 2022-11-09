import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { Navigate, redirect } from "react-router-dom";


const Authentication = () => {


    const sairLogin = () => {
        localStorage.setItem("login_feito_com_sucesso", false)
        window.location.href="/login";

    }


    return (
        <>
            <div className="text-end">
                <Link to="/login" type="button" href="/login.html" className="btn btn-outline-light me-2 b" role="button">Entrar</Link>


                <Link to="/registrar">
                    <button type="button" className="btn btn-warning" data-bs-toggle="modal"
                        data-bs-target="#modalRegistrar">Registrar-se</button>
                </Link>
                <button type='button' className='btn btn-primary' onClick={sairLogin}  >Sair</button>


            </div>

          
        </>

    );

}

export default Authentication;