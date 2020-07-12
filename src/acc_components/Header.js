import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <header>
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <div className="navbar-brand text-bold">Welcome to EduFun</div>
                    <div className="navLinksN">
                        <div className="dropdown">
                            <button type="button" className="links mr-5 signupBtn" data-toggle="dropdown">My Account</button>
                            <div className="dropdown-menu">
                                <Link to="/logout" className="dropdown-item" href="#"><span className="fa fa-user"> My Profile </span></Link>
                                <Link to="/logout" className="dropdown-item" href="#"><span className="fa fa-sign-out"> Logout </span></Link>
                            </div>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}