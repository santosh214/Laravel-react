import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import './App.css';
import BodyContent from './BodyContent'
import { useState } from 'react';
import Login from './AuthenticationPages/Login';
import Register from './AuthenticationPages/Register';
import ForgotPassword from './AuthenticationPages/ForgotPassword';
import FourZeroOne from './ErrorPages/FourZeroOne';
import FourZeroFour from './ErrorPages/FourZeroFour';
import FiveZeroZero from './ErrorPages/FiveZeroZero';
import Tables from './Tables';
import Charts from './Charts';
import StaticNavigation from './StaticNavigation';
function NavSidebar() {
    const [inVisible, visible] = useState(false);
    const [light, dark] = useState(false);
    function toggleNav() {
        visible(!inVisible);
        console.warn("hello");
    };
    function toggleLight(){
dark(!light);
    }





    return (
        <Router>
            <div className={`sb-nav-fixed ${inVisible ? "sb-sidenav-toggled" : ""}`}>

                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/home">Start Bootstrap</Link>
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
                                    <Link className="nav-link" to="/home">
                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </Link>
                                    <div className="sb-sidenav-menu-heading">Interface</div>
                                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                        <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Layouts
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <Link className="nav-link" to="/static-content">Static Content</Link>
                                            <Link className="nav-link" onClick={toggleLight}>Light SideNav </Link>

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
                                                    <Link className="nav-link" to="/login">Login</Link>
                                                    <Link className="nav-link" to="/register">Register</Link>
                                                    <Link className="nav-link" to="/forgot-password">Forgot Password</Link>
                                                </nav>
                                            </div>
                                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                                Error
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                            </a>
                                            <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                                <nav className="sb-sidenav-menu-nested nav">
                                                    <Link className="nav-link" to="/401">401 Page</Link>
                                                    <Link className="nav-link" to="/404">404 Page</Link>
                                                    <Link className="nav-link" to="/500">500 Page</Link>
                                                </nav>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="sb-sidenav-menu-heading">Addons</div>
                                    <Link className="nav-link" to="/charts">
                                        <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Charts
                            </Link>
                                    <Link className="nav-link" to="/tables">
                                        <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Tables
                            </Link>
                                </div>
                            </div>
                            <div className="sb-sidenav-footer">
                                <div className="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                        </nav>
                    </div>
{/* 
                    <div id="layoutSidenav_content">

                        <SideContent />
                    </div> */}

                </div>
                <Route path="/home" component={BodyContent}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/forgot-password" component={ForgotPassword}></Route>
                <Route path="/401" component={FourZeroOne}></Route>
                <Route path="/404" component={FourZeroFour}></Route>
                <Route path="/500" component={FiveZeroZero}></Route>
                <Route path="/tables" component={Tables}></Route>
                <Route path="/charts" component={Charts}></Route>
                <Route path="/static-content" component={StaticNavigation}></Route>

            </div>
        </Router>
    );
}

export default NavSidebar;

if (document.getElementById('navSidebar')) {
    ReactDOM.render(<NavSidebar />, document.getElementById('navSidebar'));
}
