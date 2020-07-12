import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

export default function DashboardHome() {
    return (
        <>
            
                <div className="sidebarLinks">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link text-bold">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sessions" className="nav-link">Sessions</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/downloads" className="nav-link">Downloads</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/settings" className="nav-link">Settings</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
        </>
    );
}
