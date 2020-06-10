import React from 'react';
import SideBar from './SideBar';
import DashboardFooter from './DashboardFooter';
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
                                <p>
                                We are a bootstrap startup with a vision to impact education and economics solving complex problems with simple solutions. Edunomics combines tech expertise and business intelligence to catalyze change and deliver results. We are employing top talent to provide a uniquely matching solution for your unique problem.
                                </p>
                            </div>
                        </div>
                        <div className="container-fluid col-12 m-0  jumbotron rounded-0 bg-light">
                            <div align="center">
                                <div>EDUNOMICS</div>
                                <small>contact@edunomics.in</small>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}