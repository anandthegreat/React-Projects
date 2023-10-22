import { useState } from "react";
import logoImg from "../../src/utils/app-logo.jpg" 


const Header = () => {
    const [logged, setLogged] = useState("Login"); 
    return (
    <div className="header">
        <div className="logo-container">
            <img src={logoImg} className="logo" alt="app-logo"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
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