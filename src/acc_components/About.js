import React from 'react';
import SideBar from './SideBar';
import './About.css';
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
                        <br />
                        <div className="jumbotron dashAboutDiv rounded-0 m-0">
                            <h3>About Us </h3>
                            <div className="jumbotron shadow text-dark">
                                <p align="center">
                                    EduFun is a E-Learning Platform to Learn Programmings and Codings by videos and blog contents.<br/>
                                    EduFun is a simple Front-End project, It is Created to Learn RectJS.
                                </p>
                            </div>
                        </div>
                        <div className="container-fluid col-12 m-0  jumbotron rounded-0 bg-light">
                            <div align="center">
                                <div>EduFun</div>
                                <small>contact@edufun.com</small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}