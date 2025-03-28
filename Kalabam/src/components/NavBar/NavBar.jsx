import React, { useEffect, useState } from "react";
import "./NavBar.scss";

const NavBar = ({ page }) => {
    const [menuIcon, setMenuicon] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const handleMenuIcon = () => {
        setMenuicon(!menuIcon);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`navbars ${isSticky ? "sticky" : ""} ${page === "about" ? "blue-bg" : ""}`}>
            <div className="container-fluid">
                <div className="row nav_row">
                    <div className="col-xl-3 col-lg-2 col-6 nav_col1">
                        <div className="logo">
                            <a href="">
                                LOGO
                                <img src="" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8 nav_col2">
                        <div id="mobile_menu">
                            <ul className={menuIcon ? "show" : ""}>
                                <li>
                                    {/* <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link > */}
                                    <a href="#home">Home</a>
                                </li>
                                <li>
                                    <a href="#about">About us</a>
                                </li>
                                <li>
                                    <a href="#service">service</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                                <i className={menuIcon ? "bx bx-x" : ""} onClick={handleMenuIcon}></i>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-6  nav_col3">
                        <div className="items">
                            {/* <div className="nav_button">
                                <a href="#service">
                                    <button>get started</button>
                                </a>
                            </div> */}
                            <div className="mobile_icon" onClick={handleMenuIcon}>
                                <i className={menuIcon ? "" : "bx bx-menu"}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
