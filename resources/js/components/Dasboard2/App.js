import React from 'react'
import ReactDOM from 'react-dom';
import './App.css';
import { HashRouter as Router, Route,Switch,NavLink } from "react-router-dom";
import components from './DyanmicComponentData'
import NavSidebar from './NavSidebar';
import Table from '../Tables/Tabulator/Table';
 export default function App() {


    let dynamicComponents = components;
    console.warn("App.js", dynamicComponents);
    return (
        <Router>

            <div className="App">
{/* <Table /> */}
                    <NavSidebar />

                    {
                        dynamicComponents.map((item, index) => {
                            return <Switch key={index}>
                                <React.Suspense  fallback={<div>Loading...</div>}>
                            <Route exact  path={item.route}  component={item.components}></Route>
                            </React.Suspense>
                            </Switch>
                        })
                    }
            </div>
        </Router>

    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
