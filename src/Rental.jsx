import React from 'react';
import { useLocation , useNavigate } from "react-router-dom";
import axios from "axios";
import "./assets/css/rental.css"



function Rental() {
    const location = useLocation();
  const post = location.state;
  const navigate = useNavigate();

 async function handleRenting(){
    navigate("/" ,{replace: true})
    await axios.post("addBook",{isRented : false , id : post._id});  
    

  }
  return (
    <div className="main">
    <h1 className="header">Book details!</h1>
    <div className="sub">
        <h1 className="form-head ">{post.title}</h1>
        <div className="info-disp center-align">
            <div className="image-display"><img src={post.myFile}></img></div>
            <p className="author-disp">Author:  {post.author}</p>
            <p className="para-disp">{post.review}</p>
        </div>
        <h1 className="form-head">Owner Details:</h1>
        <div className="info-disp"> 
            <p className="para-disp">Name: {post.name}</p>
            <p className="para-disp">Contact: {post.mobile}</p>
            <p className="para-disp">Mail Id: {post.email}</p>
        </div>
        <h1 className="form-head">Checkout</h1>
        <div className="info-disp center-align">
            <button className="checkout-button para-disp rent" onClick={handleRenting}>Rent now</button>
            {/* <button className="checkout-button para-disp del">Delete from records</button> */}
     
        </div>
    </div>
  </div>
 
  )
}

export default Rental
