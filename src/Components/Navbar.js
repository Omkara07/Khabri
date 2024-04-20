import React from 'react'
import { Link } from "react-router-dom"
import moon from "./clear-night.png";

export default function Navbar(props){
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-dark" style={{color:"white"}}>
                <div className="container-fluid" style={{color:"white"}}>
                    <Link className="navbar-brand" style={{color:"white"}} to="/">Khabari</Link>
                    <button className="navbar-toggler bg-light" style={{color:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <span className="navbar-toggler-icon"></span>
                    <div className="collapse navbar-collapse" style={{color:"white"}} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link" style={{color:"white"}} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" style={{color:"white"}} to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" style={{color:"white"}} to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" style={{color:"white"}} to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" style={{color:"white"}} to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" style={{color:"white"}} to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" style={{color:"white"}} to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" style={{color:"white"}} to="/technology">Technology</Link></li>
                        </ul>
                    </div>
                    <div className="form-check form-switch mx-2">
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                        <label className={`form-check-label text-${props.mode==="light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault"><img src={moon} alt="" style={{height:'40px', width:'40px'}}/></label>
                    </div>
                </div>
            </nav>
        </div>
    )
}
