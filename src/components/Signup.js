import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

export default function Signup() {
    return (
        <>
            <div align="center" className="container signupDiv">
                <div className="row">
                    <div className="col-lg-9">
                        
                    </div>
                    <div className="col-lg-3">
                        <div className="formDiv">
                            <div className="jumbotron jumbotronDiv rounded-0" style={{padding: "20px"}}>
                               <h4>SIGN UP</h4>
                               <br/>
                               <form>
                                   <label>Name</label>
                                   <input type="text" />

                                   <label>Email Id</label>
                                   <input type="email" />
                                   
                                   <label>Password</label>
                                   <input type="password" />

                                   <label>Mobile No</label>
                                   <input type="text" />
                                    <br/>
                                    <br/>
                                   <Link to="/login" className="signupFormBtn bg-transparent">Sign Up</Link>
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}