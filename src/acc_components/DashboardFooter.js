import React from 'react';

export default function DashboardFooter(){
    return (
        <>
            <div className="container-fluid col-12 m-0  jumbotron rounded-0 bg-light">
                <div className="row">
                    <div className="col">
                        <div className="topicCoveredDiv shadow">
                            Topics Covered
                    <hr />
                        </div>
                    </div>
                    <div className="col">
                        <div className="topicCoveredDiv shadow">
                            Recent Activities
                    <hr />
                        </div>
                    </div>
                </div>
                <br />
                <div className="col">
                    <div className="topicCoveredDiv shadow">
                        <center>Performance</center>
                        <hr />
                    </div>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <div align="center">
                    <div>EDUNOMICS</div>
                    <small>contact@edunomics.in</small>
                </div>
            </div>
        </>
    )
}