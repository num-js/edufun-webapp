import React from 'react';
import SideBar from './SideBar';
import DashboardFooter from './DashboardFooter';
import './Downloads.css';

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
                        <div className="jumbotron dashDownloadsDiv rounded-0 m-0">
                            <h3>Download Previous Year Questions</h3>
                        </div>
                        <DashboardFooter />
                    </div>
                </div>
            </div>
        </>
    );
}