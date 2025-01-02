import React from "react";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import About from "../components/About/About";
import Service from "../components/Service/Service";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <>
            {/* <NavBar /> */}
            <Hero />
            <About />
            <Service />
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;
