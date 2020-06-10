import React from 'react';
import './DashboardHome.css';
import SideBar from './SideBar';
import DashboardFooter from './DashboardFooter';

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
                        <div className="jumbotron dashHomeDiv rounded-0 m-0">
                            <div align="center" className="">
                                <div className="fourDiv row">
                                    <div className="jumbotron shadow mr-5">
                                        All Interactive <br /> Sessions
                                    </div>
                                    <div className="jumbotron shadow ml-5">
                                        Practice <br /> Questions
                                    </div>
                                </div>
                                <div className="fourDiv row">
                                    <div className="jumbotron shadow mr-5">
                                        Downloads
                                    </div>
                                    <div className="jumbotron shadow ml-5">
                                        Ask <br /> Questions
                                    </div>
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