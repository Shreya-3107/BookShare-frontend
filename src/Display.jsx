import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link , Navigate} from "react-router-dom";
import "./assets/css/display.css"
import "./assets/css/main.css"
import Card from "./Card";


function Display() {
  const [postDetails, setPostDetails] = useState([]);
  const [selectedUser , setSelectedUser] = useState("");
  useEffect(() => {
    axios.get("/display").then((res) => {
      const resData = res.data;
      setPostDetails(resData);
    });
  });

 

  return (
    <div className="main">
      <div className="header"><h1>BookShare</h1></div>
      <div className="sub">
        <div className="display-content">
            <div className="display-grid">
            {postDetails.length != 0? postDetails.map((post) =>(
                    <Card key={post._id} post = {post} onClick={()=>setSelectedUser(post._id)} />)):

                    <div className="no-post-container"><p>No Books Available for now</p></div>}
            </div>           
            <button className="addcard-button">
              <Link to="/addBook">Add Book</Link>
            </button>
        </div>
        
    </div>
        
    </div>
  );
}

export default Display;


{/* <div className="display-container">
    <div className="display-header">
            Header
      <button >
        <Link to="/addBook">Add Card</Link>
      </button>
      <br></br>
      <div>
        {postDetails.map((post) =>(
            <div >
            {post.title}<br></br>
            {post.author}<br></br>
            {post.rate}<br></br>
            {post.review}<br></br>
     
            {post.name}     <br></br>
            {post.mobile}<br></br>
            {post.mail}<br></br>
        
            </div>
        ))}
      </div>
      </div>
    </div> */}