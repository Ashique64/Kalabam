import React from "react";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import About from "../components/About/About";
import Service from "../components/Service/Service";

const Home = () => {
    return (
        <>
            {/* <NavBar /> */}
            <Hero />
            <About />
            <Service />
        </>
    );
};

export default Home;
