import React from 'react';
import ReactDOM from 'react-dom';
import {  NavLink } from 'react-router-dom'
import './App.css';
import { useState } from 'react';

function NavSidebar() {
    const [inVisible, visible] = useState(false);
    const [light, dark] = useState(false);
    function toggleNav() {
        visible(!inVisible);
        console.warn("hello");
    };
    function toggleLight() {
        dark(!light);
    }





    return (
        <div className={`sb-nav-fixed ${inVisible ? "sb-sidenav-toggled" : ""}`}>

            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/home">Start Bootstrap</NavLink>
                <button className="btn btn-link btn-sm order-1 order-lg-0" onClick={toggleNav} id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
                {/* <!-- Navbar Search--> */}
                <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button"><i className="fas fa-search"></i></button>
                        </div>
                    </div>
                </form>
                {/* <!-- Navbar--> */}
                <ul className="navbar-nav ml-auto ml-md-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="userDropdown" href="#!" role="button" data-toggle="dropdown" ><i className="fas fa-user fa-fw"></i></a>
                    </li>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#!">Settings</a>
                        <a className="dropdown-item" href="#!">Activity Log</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="login.html">Logout</a>
                    </div>
                </ul>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">

                    <nav className={`sb-sidenav accordion  ${light ? 'sb-sidenav-light' : 'sb-sidenav-dark'}`} id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Core</div>
                                <NavLink className="nav-link" to="/home">
                                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </NavLink>
                                <div className="sb-sidenav-menu-heading">Interface</div>
                                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Layouts
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <NavLink className="nav-link" to="/static-content">Static Content</NavLink>
                                        <p className="nav-link" onClick={toggleLight}>Light SideNav </p>

                                    </nav>
                                </div>
                                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                </a>
                                <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                            Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <NavLink className="nav-link" to="/login">Login</NavLink>
                                                <NavLink className="nav-link" to="/register">Register</NavLink>
                                                <NavLink className="nav-link" to="/forgot-password">Forgot Password</NavLink>
                                            </nav>
                                        </div>
                                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                            Error
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                        </a>
                                        <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                            <nav className="sb-sidenav-menu-nested nav">
                                                <NavLink className="nav-link" to="/401">401 Page</NavLink>
                                                <NavLink className="nav-link" to="/404">404 Page</NavLink>
                                                <NavLink className="nav-link" to="/500">500 Page</NavLink>
                                            </nav>
                                        </div>
                                    </nav>
                                </div>
                                <div className="sb-sidenav-menu-heading">Addons</div>
                                <NavLink className="nav-link" to="/charts">
                                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Charts
                            </NavLink>
                            <NavLink className="nav-link" to="/tables">
                                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Tables
                            </NavLink>
                            <NavLink className="nav-link" to="/material">
                                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Material Table
                            </NavLink>
                            <NavLink className="nav-link" to="/grid">
                                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Grid Table
                            </NavLink>
                            </div>
                        </div>
                        <div className="sb-sidenav-footer">
                            <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                    </nav>
                </div>
            </div>

        </div>
    );
}

export default NavSidebar;

if (document.getElementById('navSidebar')) {
    ReactDOM.render(<NavSidebar />, document.getElementById('navSidebar'));
}
