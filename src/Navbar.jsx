import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className=" nav_bg">
        <div className="row">
          <div className="col mx-auto">


            <nav className="navbar navbar-expand-xl bg-dark">
              <div className="container-fluid">
                <NavLink
                  className="navbar-brand" to="/">Techies</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link active" aria-current="page" to="/"> <h8 class="text-white">Home</h8></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to="/about"> <h8 class="text-white">About</h8></NavLink>
                    </li>

                    {/* <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to="/service">Service</NavLink>
                    </li> */}

                    
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to="/login"> <h8 class="text-white">Login</h8></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to="/signup"> <h8 class="text-white">signup</h8></NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to="/contact"> <h8 class="text-white">Contact</h8></NavLink>
                    </li>
                  </ul>

                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;