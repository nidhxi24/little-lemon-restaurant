import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import logo from './Images/logo.png';
import './Navbar.css';
import Home from "./Home";
import Menu from "./Menu";
import AboutUs from "./AboutUs";
import Reservations from "./Reservations";
import OrderOnline from "./OrderOnline";
import Login from "./Login";
function Navbar() {

    return (
        <div className="nav-main">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav-button">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">AboutUs</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/reservations">Reservations</Link>
                    </li>
                    <li>
                        <Link to="/order-online">OrderOnline</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>

                </ul>

            </div>
        </div>
    )
}
export default Navbar;