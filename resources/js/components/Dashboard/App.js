import React from 'react'
import ReactDOM from 'react-dom';
import NavSidebar from './NavSidebar';
export default function App() {
    return (
            <div>
                <NavSidebar />
            </div>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
