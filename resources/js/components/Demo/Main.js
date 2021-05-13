import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Header from './Header'
import Sidebar from './Sidebar';
function Main() {
    return (
        <div className="container-fluid">
            <div className="row">


                <div className="col">
                    <Header />
                    <Sidebar />
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
