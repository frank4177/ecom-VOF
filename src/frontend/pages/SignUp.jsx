import React from "react";
import './signup.css'


const SignUp = () => {
    return ( 
        <div className="signup-container">
            <div className="signup-wrapper">
                <h1>CREATE AN ACCOUNT</h1>
                <form action="">
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="last name"/>
                    <input type="text" placeholder="email"/>
                    <input type="text" placeholder="username"/>
                    <input type="text" placeholder="password"/>
                    <input type="text" placeholder="confirm password"/>
                    <div className="agreement">
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </div>
                    <button><h3>Create</h3></button>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;