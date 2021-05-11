import React from 'react'
import ReactDOM from 'react-dom';

export default function Footer() {
    return (
        <div className="footer fixed-bottom col-10">
            <footer className="text-center text-danger py-3 font-weight-bold bg-success">Footer Component</footer>
        </div>
    )
}
if (document.getElementById('footer')) {
    ReactDOM.render(<Footer />, document.getElementById('footer'));
}