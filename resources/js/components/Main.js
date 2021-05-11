import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Header from './Header'
function Main() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <Header />
                    <Footer />
                </div>

            </div>

        </div>
    );
}

export default Main;

if (document.getElementById('main')) {
    ReactDOM.render(<Main />, document.getElementById('main'));
}
