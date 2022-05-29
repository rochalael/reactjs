import React from 'react';
import './login.css';

function Login(){
    return(
            <div className="login-content d-flex align-items-center">
                <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                </div>

                <input type="email" id="inputEmail" class="form-control my-2" placeholder="Email address" />
                <input type="password" id="inputPassword" class="form-control my-2" placeholder="Password" />
            
                <button class="btn btn-lg btn-primary btn-block btn-login" type="submit">Sign in</button>

                <p class="mt-5 mb-3 text-muted text-center">&copy; 2022</p>
                </form>
            </div>
    )
}

export default Login;