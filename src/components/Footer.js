import React from 'react';

export default function Footer(){
    return(
        <>
            <footer>
                <div align="center" className="bg-dark p-5 text-white">
                    <h3>EDUNOMICS</h3>
                    <p>contact@edunomics.in</p>
                    <div>
                        <div className="btn btn-dark text-white m-3"><i class="fa fa-facebook-square" aria-hidden="true"></i></div>
                        <div className="btn btn-dark text-white m-3"><i className="fa fa-twitter" aria-hidden="true"></i></div>
                        <div className="btn btn-dark text-white m-3"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                    </div>
                    <br/>
                    <div>
                        JOIN US | COOKIE POLICY | TERMS OF USE | PRIVACY POLICY
                    </div>
                </div>
            </footer>
        </>
    )
}