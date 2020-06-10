import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

export default function Login() {
    return (
        <>
            <div align="center" class="container loginDiv">
                <div className="row">
                    <div class="col-lg-9">
                        
                    </div>
                    <div className="col-lg-3">
                        <div className="formDiv">
                            <div className="jumbotron jumbotronDiv bg-transparent rounded-0" style={{padding: "20px"}}>
                               <form>
                                   <label>Email Id/Phone Number</label>
                                   <input type="text" />
                                   
                                   <label>Password</label>
                                   <input type="text" />
                                    <br/>
                                    <br/>
                                   <Link to="/home" class="loginFormBtn">Log In</Link>
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}