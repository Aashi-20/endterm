import React from 'react';
import web from "../src/images/image5.svg";
const Common =(props)=> { //reusability of props (componentS)
    return (
        <>
        <section id="header" className="">
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                            <h1>
                                {props.name}
                                <strong className="brand-name"></strong>
                            </h1>
                            <h5 className="my-3">
                                Techies is a content marketing agency offering scalable content marketing services.
                            </h5>
                            <div className="mt-3">
                                <a href= {props.visit} className="btn-get-started">
                                    {props.btname} 
                                    {/* modifiable */}
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={props.imgsrc} alt="common img" style={{width:"650px",height:"500px"}} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Common;