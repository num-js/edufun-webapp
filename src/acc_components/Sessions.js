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


                                <div className="dropdown">
                                    <button className=" links mr-5 signupBtn" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Select ClassName
                                    </button>
                                    <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                                        <li className="dropdown-submenu">
                                            <a className="dropdown-item" href="javascript:void(0);" tabindex="-1" >11th</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-submenu">
                                                    <a className="dropdown-item" href="javascript:void(0);">Physics</a>
                                                    <ul className="dropdown-menu">
                                                        <li className="dropdown-item"><a href="/# ">Quantum Theory</a></li>
                                                        <li className="dropdown-item"><a href="/# ">Current</a></li>
                                                        <li className="dropdown-item"><a href="/# ">Force</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu">
                                                    <a className="dropdown-item" href="/# ">Mathemetics</a>
                                                    <ul className="dropdown-menu">
                                                        <li className="dropdown-item"><a href="/# ">Sets</a></li>
                                                        <li className="dropdown-item"><a href="/# ">Relations</a></li>
                                                        <li className="dropdown-item"><a chref="/# ">Force</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu">
                                            <a className="dropdown-item" tabindex="-1" href="#">12th</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-submenu">
                                                    <a className="dropdown-item" href="#">Physics</a>
                                                    <ul className="dropdown-menu">
                                                        <li className="dropdown-item"><a href="#">Theory of Everything</a></li>
                                                        <li className="dropdown-item"><a href="#">Eletricity</a></li>
                                                        <li className="dropdown-item"><a href="#">Force</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu">
                                                    <a className="dropdown-item" href="#">Mathemetics</a>
                                                    <ul className="dropdown-menu">
                                                        <li className="dropdown-item"><a href="#">Mertices</a></li>
                                                        <li className="dropdown-item"><a href="#">Relations</a></li>
                                                        <li className="dropdown-item"><a href="#">Force</a></li>
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