import React from 'react';
import SideBar from './SideBar';
import DashboardFooter from './DashboardFooter';
import './Settings.css';
export default function DashboardHome() {
    return(
        <> 
            <div className="container col-12">
                <div className="row">
                    <div className="col-3 bg-secondary sidenavDiv">
                        <br />
                        <SideBar />
                    </div>
                    <div className="col-9">
                        <br />
                        <div className="jumbotron dashSettingsDiv rounded-0 m-0">
                            <h3>Settings <span className="fa fa-gear"></span></h3>
                        </div>
                        <DashboardFooter />
                    </div>
                </div>
            </div>
        </>
    );
}