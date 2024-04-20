import React from "react";
import Navbar from "./Navbar";
import img from './Images/menu.jpg';
import './Menu.css';
function Menu() {
    return (
        <>
            <Navbar />
            <div className="menu-heading">OUR MENU</div>
            <div className="menu-image">
                <img src={img} alt="our menu" />
            </div>
        </>
    );
}

export default Menu;