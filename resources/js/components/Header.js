import React from 'react'
import ReactDOM from 'react-dom';
import { Container, Navbar, Nav, NavItem } from 'react-bootstrap';
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import About from './About';
import Home from './Home';
import Contact from './Contact';
export default function Header() {
    return (
        <Router>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <header className="header fixed-top">
                                <Nav className="bg-primary px-5">
                                    <NavItem>   <Link className="nav-link text-dark" to="/home">Home</Link> </NavItem>
                                    <NavItem>   <Link className="nav-link text-dark" to="/about">About</Link> </NavItem>
                                    <NavItem>   <Link className="nav-link text-dark" to="/contact">Contact Us</Link> </NavItem>
                                </Nav>
                                <Route path="/home" component={Home}></Route>
                                <Route path="/about" component={About}></Route>
                                <Route path="/contact" component={Contact}></Route>
                            </header>
                            <div className="footer fixed-bottom">
                                <footer className="text-center text-danger py-3 font-weight-bold bg-success">Footer Component</footer>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Router>
    )
}
