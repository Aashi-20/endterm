import React from 'react';
import web from "../src/images/consulting.png";
import Common from "./Common";
const About =()=> {
    return (
        <>
        <Common 
        name="About Us: "
            
        imgsrc={web}
        visit="/Contact"
        btname="Contact Now"
        />
        </>
    );
};

export default About;