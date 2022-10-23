import React from 'react';
import Common from "./Common";
import web from "../src/images/dignup.jpg";
const SignUp =()=> {
    return (
        <>
        <Common 
        name='Become a member!' 
        imgsrc={web}
        visit="/Login"
        btname="SignUp"
        />
        </>
    );
};
export default SignUp;