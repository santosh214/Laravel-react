import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import About from './About';
import Home from './Home';
import Contact from './Contact';
export default function Header() {
    return (
        <Router>
            <div className="">
                <header className="header fixed-top ">
                <nav className="navbar navbar-expand-lg navbar-light bg-primary text-dark ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto font-weight-bold">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                        </ul>

                    </div>
                </nav>
                </header>
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>

            </div>
        </Router>
    )
}
