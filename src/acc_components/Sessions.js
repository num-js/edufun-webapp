import React from 'react';
import SideBar from './SideBar';
import DashboardFooter from './DashboardFooter';
import './Sessions.css';

export default function DashboardHome() {
    return (
        <>
            <div className="container col-12">
                <div className="row">
                    <div className="col-3 bg-secondary sidenavDiv">
                        <br />
                        <SideBar />
                    </div>
                    <div className="col-9">
                        <div className="jumbotron dashSessionsDiv rounded-0 m-0 pt-0 pl-0">
                            <div className="">


                                <div class="dropdown">
                                    <button class=" links mr-5 signupBtn" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Select Class
                                    </button>
                                    <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                                        <li class="dropdown-submenu">
                                            <a class="dropdown-item" tabindex="-1" href="#">11th</a>
                                            <ul class="dropdown-menu">
                                                <li class="dropdown-submenu">
                                                    <a class="dropdown-item" href="#">Physics</a>
                                                    <ul class="dropdown-menu">
                                                        <li class="dropdown-item"><a href="#">Quantum Theory</a></li>
                                                        <li class="dropdown-item"><a href="#">Current</a></li>
                                                        <li class="dropdown-item"><a href="#">Force</a></li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown-submenu">
                                                    <a class="dropdown-item" href="#">Mathemetics</a>
                                                    <ul class="dropdown-menu">
                                                        <li class="dropdown-item"><a href="#">Sets</a></li>
                                                        <li class="dropdown-item"><a href="#">Relations</a></li>
                                                        <li class="dropdown-item"><a href="#">Force</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu">
                                            <a class="dropdown-item" tabindex="-1" href="#">12th</a>
                                            <ul class="dropdown-menu">
                                                <li class="dropdown-submenu">
                                                    <a class="dropdown-item" href="#">Physics</a>
                                                    <ul class="dropdown-menu">
                                                        <li class="dropdown-item"><a href="#">Theory of Everything</a></li>
                                                        <li class="dropdown-item"><a href="#">Eletricity</a></li>
                                                        <li class="dropdown-item"><a href="#">Force</a></li>
                                                    </ul>
                                                </li>
                                                <li class="dropdown-submenu">
                                                    <a class="dropdown-item" href="#">Mathemetics</a>
                                                    <ul class="dropdown-menu">
                                                        <li class="dropdown-item"><a href="#">Mertices</a></li>
                                                        <li class="dropdown-item"><a href="#">Relations</a></li>
                                                        <li class="dropdown-item"><a href="#">Force</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>




                            </div>
                        </div>
                        <DashboardFooter />
                    </div>
                </div>
            </div>
        </>
    );
}