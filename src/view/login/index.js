import React, { useState } from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';

function Login(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function logar(){

        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            alert('usuário logado!');
        }).catch(erro => {
            alert(erro);
        })
    }

    return(
            <div className="login-content d-flex align-items-center">

                <form className="form-signin mx-auto">
                    <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal font-weight-bold">Login</h1> 
                </div>

                <input onChange={(e) => setEmail(e.target.value) } type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />          
                <input onChange={(e) => setSenha(e.target.value) } type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />    
            
                <button onClick={logar} class="btn btn-lg btn-block text-white btn-login" type="button">Entrar</button>

                <div className="opcoes-login mt-3 text-center">
                        <a href="#" className="mx-2 font-weight-bold">Recuperar Senha</a>
                        <a href="#" className="mx-2 font-weight-bold">Quero Cadastrar</a>
                </div>

                </form>
            </div>
    )
}

export default Login;