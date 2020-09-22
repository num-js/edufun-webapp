import React from 'react';

export default function Footer(){
    return(
        <>
            <footer>
                <div align="center" className="bg-dark p-5 text-white">
                    <h3>EduFun</h3>
                    <p>contact@edufun.in</p>
                    <div>
                        <a href="https://mdnmnahmed.github.io/portfolio/" target="_BLANK" rel="noopener"  className="btn btn-dark text-white m-3"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                        <a href="https://mdnmnahmed.github.io/portfolio/" target="_BLANK" rel="noopener"  className="btn btn-dark text-white m-3"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        <a href="https://mdnmnahmed.github.io/portfolio/" target="_BLANK" rel="noopener"  className="btn btn-dark text-white m-3"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                    <br/>
                    <div>
                        
                        JOIN US | COOKIE POLICY | TERMS OF USE | PRIVACY POLICY
                    </div>
                    <br />
                    <small className="text-muted">
                        This is a simple Front-End personal project in React to Learn ReactJS by <a href="https://mdnmnahmed.github.io/portfolio/" target="_BLANK" rel="noopener"> N_Ah </a>
                    </small>
                </div>
            </footer>
        </>
    )
}