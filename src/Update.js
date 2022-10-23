import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Navigate, useNavigate} from "react-router-dom";

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image,setImage]=useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setImage(localStorage.getItem("image"));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log("Id....",id);
        axios.put(
            `https://634d4b56acb391d34a9934c4.mockapi.io/endterm/${id}`,
        {
            name: name,
            email: email,
            image:image,
        })
        .then(() => {
           navigate("/read");
        });
    };

  return (
    <>
    <h2 id="heading">UPDATE USERS</h2>
    <form class="form1">
    <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" 
    className="form-control"
    value={name}
    onChange={(e)=> setName(e.target.value)}
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" 
    className="form-control"
    value={email}
    onChange={(e)=> setEmail(e.target.value)}
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputImage1" className="form-label">Email address</label>
    <input type="email" 
    className="form-control"
    value={image}
    onChange={(e)=> setImage(e.target.value)}
    />
  </div>
  <button type="submit" className="btn2" 
  onClick={handleUpdate}
  >
    Update</button>
</form>
    </>
  )
}

export default Update