import React, { useState } from "react";
import "./Service.scss";

const Service = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const serviceItems = [
        {
            color: "#0d547d",
            title: "Pooja",
            icon: "bx bx-spa",
            desc: "Experience divine blessings through our meticulously performed poojas and rituals.",
        },
        {
            color: "#6c2281",
            title: "Astrology",
            icon: "bx bx-moon",
            desc: "Seek guidance from our experienced astrologers for life’s important decisions.",
        },
        {
            color: "green",
            title: "Festival",
            icon: "bx bx-party",
            desc: "Join us in celebrating vibrant temple festivals that bring the community together.",
        },
        {
            color: "#a5241b",
            title: "Prasadam",
            icon: "bx bx-food-menu",
            desc: "Relish the divine prasadam prepared with devotion and care.",
        },
    ];

    return (
        <div id="service" className="service">
            <div className="shape-2"></div>
            <div className="container">
                <div className="row service_row">
                    <div className="service_title">
                        <h3>
                            <i className="bx bx-cog"></i>Services
                        </h3>
                        <h4>
                            Experience the Divine <span>Through Our Services</span>
                        </h4>
                    </div>
                    <div className="row service_items">
                        {serviceItems.map((item, index) => (
                            <div
                                key={index}
                                className="col-xl-3 col-lg-3 col-md-12 item1"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div
                                    className="card"
                                    style={{
                                        backgroundColor: hoveredIndex === index ? item.color : "var(--bg-color)",
                                    }}
                                >
                                    <div className="icon" style={{ backgroundColor: item.color }}>
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="content">
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="shape-1"></div>
        </div>
    );
};

export default Service;
