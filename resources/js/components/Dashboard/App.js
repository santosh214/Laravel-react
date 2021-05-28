import React from 'react'
import ReactDOM from 'react-dom';
import NavSidebar from './NavSidebar';
import BodyContent from './BodyContent'
import Login from './AuthenticationPages/Login';
import Register from './AuthenticationPages/Register';
import ForgotPassword from './AuthenticationPages/ForgotPassword';
import FourZeroOne from './ErrorPages/FourZeroOne';
import FourZeroFour from './ErrorPages/FourZeroFour';
import FiveZeroZero from './ErrorPages/FiveZeroZero';
import Tables from './Tables';
import Charts from './Charts';
import StaticNavigation from './StaticNavigation';
import { HashRouter as Router, Link, Route,Switch } from 'react-router-dom'
import './App.css';
import DyanmicComponent from './DyanmicComponent'
export default function App(props) {
    console.warn("propsAPP",props);
    return (
        <Router>
            <div>
                <NavSidebar />
            </div>
            <Switch>
             {/* <Route  path="/home/:slug" component={App}></Route> */}
             <Route  path="/tables" component={DyanmicComponent}></Route>
{/*

            <Route path="/authentication" component={AuthHome}></Route>








                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/forgot-password" component={ForgotPassword}></Route>
                <Route path="/401" component={FourZeroOne}></Route>
                <Route path="/404" component={FourZeroFour}></Route>
                <Route path="/500" component={FiveZeroZero}></Route>
                <Route path="/tables" component={Tables}></Route>
                <Route path="/charts" component={Charts}></Route>
                <Route path="/static-content" component={StaticNavigation}></Route>
                //user router */}
                {/* <Route path="/user/:id"  component={User}></Route> */}

                </Switch>
            </Router>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
