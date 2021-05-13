import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import FollowUs from './FollowUs';
import Follow from './FollowUs';
import Home from './Home';
import './Sidebar.css'

export default function Sidebar() {
    return (
        <Router>        <div>
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block  sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to="/follow" className="nav-link border-dark border-bottom">follow</Link>

                                </li>
                                <li className="nav-item">
                                <Link className="nav-link border-dark border-bottom" to="/contact">Contact US</Link>
                            </li>
                            </ul>


                        </div>
                    </nav>
                </div>
            </div>
            <Route path="/follow" component={FollowUs}></Route>
            <Route path="/contact" component={Contact}></Route>


        </div>
        </Router>

    )
}
if (document.getElementById('sidebar')) {
    ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));
}