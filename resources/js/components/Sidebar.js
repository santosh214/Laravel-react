import React from 'react'
import ReactDOM from 'react-dom';

export default function Sidebar() {
    return (
        <div className="">
            <p className="text-center text-danger py-3 font-weight-bold bg-success">sidebar Component</p>
        </div>
    )
}
if (document.getElementById('sidebar')) {
    ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));
}