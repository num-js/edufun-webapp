import React from 'react';
import './SideBar.css';
import { Link } from 'react-router-dom';

export default function DashboardHome() {
    return (
        <>
            
                <div className="sidebarLinks">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <Link to="/home" class="nav-link text-bold">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/sessions" class="nav-link">Sessions</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/downloads" class="nav-link">Downloads</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/settings" class="nav-link">Settings</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
        </>
    );
}
