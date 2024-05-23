import React from 'react';
import Navbar from './Navbar';
import MainCont from './MainCont';

function Layout({ children }) {
    return (
        <div>
            <Navbar />
         
            <MainCont />
        </div>
    );
}

export default Layout;
