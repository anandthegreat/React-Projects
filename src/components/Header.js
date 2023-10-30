import { useState } from "react";
import logoImg from "../../src/utils/app-logo.jpg" 
import { Link } from "react-router-dom";


const Header = () => {
    const [logged, setLogged] = useState("Login"); 
    return (
    <div className="header">
        <div className="logo-container">
            <img src={logoImg} className="logo" alt="app-logo"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About us</Link></li>
                <li><Link to={"/contact"}>Contact us</Link></li>
                <li>Cart 🛒</li>
                <li>
                    <button onClick={
                        () => {
                            setLogged(logged === "Login" ? "Logout": "Login");
                        }
                    }> {logged} </button>
                </li>
            </ul>
        </div>
    </div>
    )
};

export default Header;