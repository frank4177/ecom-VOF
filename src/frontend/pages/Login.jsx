import React from "react";
import './login.css'


const Login = () => {
    return ( 
        <div className="login-container">
            <div className="login-wrapper">
                <h1>SIGN IN</h1>
                <form action="">
                    <input type="text" placeholder="username"/>
                    <input type="text" placeholder="password"/>
                    <button>LOGIN</button>
                    <a href="">FORGOT PASSWORD?</a>
                    <a href="">CREATE A NEW ACCOUNT</a>
                </form>
            </div>
        </div>
     );
}
 
export default Login;