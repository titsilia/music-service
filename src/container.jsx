import React from 'react';
import Main from './blocks/main';
import Bar from './blocks/bar';
import Footer from './blocks/footer';

function Container() {
    return (
        <div className="wrapper">
            <div className="container">
                <Main />
                <Bar />
                <Footer />
            </div>
        </div>
    );
}

export default Container