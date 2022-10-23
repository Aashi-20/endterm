import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";

const Read = () => {

  const [data, setData] = useState([]);

  function getData() {
    axios.get('https://634d4b56acb391d34a9934c4.mockapi.io/endterm')
    .then(res => {
      console.log(res.data);
      setData(res.data);
    });
  }

  function handleDelete(id){
    axios.delete(`https://634d4b56acb391d34a9934c4.mockapi.io/endterm/${id}`
    ).then(() => {
      getData();
    })
  }

  const setToLocalStorage = (id,name,email,image) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("image",image);

  }


  useEffect(() => {
    getData();

  }, []);

  getData();
  return (
    <>
    <h2>Read Operation</h2>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Serial No.</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Image</th>
      {/* <th scope="col"></th>
      <th scope="col"></th> */}
    </tr>
  </thead>
  {
    data.map((eachData) => {
      return (
        <>
        <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      <td><img src={(eachData.image)} style={{height:"5rem",width:"6rem"}}></img></td>
      <td>
        <Link to="/update">
          <button className="btn-success" onClick={()=> setToLocalStorage(
            eachData.id, 
            eachData.name, 
            eachData.email,
            eachData.image,
            )
            }>
              Edit{""}
              </button>
          </Link>
        </td>
        <td>
        <button className="btn-danger" onClick={()=>handleDelete(eachData.id)}>Delete</button>
        </td>
      
    </tr>
  
  </tbody>
        </>
      )
    })
    
}
</table>
    </>
  )
}

export default Read