import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <header>
                <nav className="navbar navbar-transparent justify-content-between">
                    <div className="navbar-brand text-light text-bold">Welcome to EduFun</div>
                    <div className="navLinks">
                        <Link to="/login" className="links">Log in</Link>
                        <Link to="/signup" className="links m-4 signupBtn">Sign up</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}