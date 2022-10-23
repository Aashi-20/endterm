import axios from 'axios';
import React,{ useState } from 'react';
import {useNavigate} from "react-router-dom";

const register = () => {

  const [name, setName] =  useState("");
  const [email, setEmail] =  useState("");
  const history = useNavigate()
  const header = {"Access-Control-Allow-Origin": "*"};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked")
     axios.post("https://63468cc0745bd0dbd38039d7.mockapi.io/st4",{
      name: name, 
      email: email,
      header,
     })

     .then(() => {
      history("/read");
     });
  };

  return (
    <>
    <h2 id="heading">Create</h2>
    <form className="form1">
    <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="password" 
    className="form-control"
    onChange={(e)=> setName(e.target.value)}
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" 
    className="form-control"
    aria-describedby="emailHelp"
    onChange={(e)=> setEmail(e.target.value)}
    />
  </div>
  
  <button type="submit" className="btn2" onClick={handleSubmit}>
    Submit</button>
</form>
    </>
  )
}

export default register