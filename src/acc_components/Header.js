import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <header>
                <nav class="navbar navbar-light bg-light justify-content-between">
                    <div class="navbar-brand text-bold">Welcome to Edunomics</div>
                    <div className="navLinksN">
                        <Link to="/logout" className="links mr-5 signupBtn">My Account</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}