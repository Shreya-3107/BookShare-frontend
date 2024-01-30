import React from 'react'
import "./assets/css/display.css"
import { useNavigate } from "react-router-dom";


function Card({post,onClick}) {
  const navigate = useNavigate();
  return (
  
    <div className={'card-holder'+(post.isRented?" opacity-70":" ")} onClick={() =>(navigate("/rentBook",{state : post , replace: true}))}>

   
      <div className='card-img'>
      <img  src={post.myFile} className='book-img '/>
      </div>
      <div className={"card-info"}>
       
       <div className='post-author '>
       <span>Author :  &nbsp;</span>
       {post.author}
       </div>
       <div className='post-title'>
       <span>Title : &nbsp;</span>{post.title}
       </div>
       <div className='post-review'>
       <span>Reviews :&nbsp;</span>{post.review}
       </div>
       <div className='post-rate'>
       <span>Rate :&nbsp;</span>
        &#8377; {post.rate}/month
       </div>
   
      </div>
      {post.isRented?<div className='rented-warning'> <h1>Rented</h1></div>:""}
      </div>
  
  )
}

export default Card
