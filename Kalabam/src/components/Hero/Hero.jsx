import React from "react";
import "./Hero.scss";

const Hero = () => {
    return (
        <div id="home" className="hero">
            <div className="container">
                <div className="row hero_row">
                    <div className="col-xl-6 col-lg-6 col-md-12 item1">
                        <div className="text_section">
                            <h3>
                                Welcome to <span>Kalabam</span>
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <div className="hero_buttons">
                                <a href="#contact"><button className="book_now">Book Now</button></a>
                                <a href="#contact"><button className="contact_us">Contact Us</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 item2">
                        <div className="img_section">
                            <img className="image1" src="/images/Oom2.png" alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape-1"></div>
        </div>
    );
};

export default Hero;
