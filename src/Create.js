import axios from 'axios';
import React,{ useState } from 'react'; //usestate is used to store thr values
import {useNavigate} from "react-router-dom";

const Create = () => {

  const [name, setName] =  useState("");
  const [email, setEmail] =  useState("");
  const [image,setImage]=useState("");
  const history = useNavigate()
  const header = {"Access-Control-Allow-Origin": "*"};

  const handleSubmit = (e) => {
    e.preventDefault(); 
    // 
    console.log("Clicked")
     axios.post("https://634d4b56acb391d34a9934c4.mockapi.io/endterm",{
      name: name, 
      email: email,
      image:image,
      header,
     })

     .then(() => {
      history("/read");
     });
  };

  return (
    <>
    <h2 id="heading">ADD USERS:</h2>
    <form className="form1">
    <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" 
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
  <div class="mb-3">
    <label for="exampleInputImage1" className="form-label">Image</label>
    <input type="text" 
    className="form-control"
    // aria-describedby="emailHelp"
    onChange={(e)=> setImage(e.target.value)}
    />
  </div>
  
  <button type="submit" className="btn2" onClick={handleSubmit}>
    Submit</button>
</form>
    </>
  )
}

export default Create