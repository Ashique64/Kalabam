import React from "react";
import "./About.scss";

const About = () => {
    return (
        <div id="about" className="about">
            <div className="container">
                <div className="row about_row">
                    <div className="col-xl-6 col-lg-6 col-md-12 item1">
                        <div className="img_section">
                            <img className="image1" src="/images/pooja.jpg" alt="Hero Image" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 item2">
                        <div className="title_section">
                            <h3><i className="bx bxs-info-circle"></i>About Us</h3>
                            <h4>
                                Your Gateway to <br />
                                <span>Spiritual Serenity</span>
                            </h4>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi error quasi adipisci
                                laborum possimus ducimus sequi facere dolore ipsa iusto vel laudantium eius est amet minus
                                saepe, vitae cum unde!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
