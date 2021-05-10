import React from 'react'
import ReactDOM from 'react-dom';

export default function User() {
    return (
        <div>
            <h1 className="bg-dark text-success">User Component</h1>
        </div>
    )
}
if (document.getElementById('user')) {
    ReactDOM.render(<User />, document.getElementById('user'));
}