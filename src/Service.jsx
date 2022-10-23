import React from 'react';
import web from "../src/images/image4.svg";
import Common from "./Common";
const Service =()=> {
    return (
        <>
         <Common 
        name="Welcome to Service Page" 
        imgsrc={web}
        visit="/Login"
        btname="Login to get started"
        />
        </>
    );
};

export default Service;