import {useContext, useState} from "react";
import axios from "axios";
import "./assets/css/addBook.css";

import { Link , useNavigate } from "react-router-dom";



export default function AddBook() {
  const [title , setTitle] = useState("");
  const [author , setAuthor] = useState("");
  const [myFile , setImage] = useState("");
  const [rate , setRate] = useState("");
  const [name , setName] = useState("");
  const [mobile , setMobile] = useState("");
  const [email , setEmail] = useState("");
  const [review , setReview] = useState("");


  const navigate = useNavigate();
 
  const details = {
    title,
    author,
   myFile,
    review,
    rate,
    name,
    mobile,
    email,
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    navigate("/" ,{replace: true})
    const {data} = await axios.post("addBook", details); 
     
  }

  const handleFileUpload = async (e)=>{
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64)

  }
  
  return(
    <div className="main">
        <h1 className="header">Add New Book!</h1>
        <div className="sub">
            <form  onSubmit={handleSubmit} method="post">
                <div className="details">
                    <h1 className="form-head">Book Details:</h1>
                    <div className="input-box">
                        <label for="title" className="book-label">Title:</label><br/>
                        <input type="text" id="title" name="title" className="book-input" placeholder="Eg: The Da Vinci Code" onChange={ev => setTitle(ev.target.value)}></input><br/>
                        <label for="author" className="book-label">Author:</label><br/>
                        <input type="text" id="author" name="author" className="book-input" placeholder="Eg: Dan Brown"  onChange={ev => setAuthor(ev.target.value)}></input><br/>
                        <label for="reviews" className="book-label">Review:</label><br/>
                        <textarea id="reviews" name="reviews" className="book-input" placeholder="Enter reviews about the book" onChange={ev => setReview(ev.target.value)}></textarea><br/>
                        <label for="rate" className="book-label">Rate per month: <span id="hint">(in rupees)</span></label><br/>
                        <input type="number" id="rate" name="rate" className="book-input" placeholder="Eg: 10" onChange={ev => setRate(ev.target.value)}></input>
                        <label for="image_uploads" className="book-label">Image:</label><br/>
                        <input type="file" id="image_uploads" name="image_uploads" accept="image/*,.pdf" onChange={handleFileUpload}></input><p id="hint">(File must be bellow 50kb)</p>
                    </div>
                </div>
                <div className="details">
                    <h1 className="form-head">Contact Details</h1>
                    <div className="input-box">
                        <label for="name" className="book-label">Name:</label><br/>
                        <input type="text" id="name" name="name" className="book-input" placeholder="Enter name"  onChange={ev => setName(ev.target.value)}></input><br/>
                        <label for="mobile" className="book-label">Mobile number</label><br/>
                        <input type="number" id="mobile" name="mobile" className="book-input" placeholder="Enter mobile number"  onChange={ev => setMobile(ev.target.value)}></input><br/>
                        <label for="mail_id" className="book-label">Mail Id</label><br/>
                        <input type="email" id="mail_id" name="mail_id" className="book-input" placeholder="Enter mail"  onChange={ev => setEmail(ev.target.value)}></input><br/>
                    </div>
                </div>
                <div id="submit">
                    <button type="submit" className="submitButton button">Submit</button>
                </div>
            </form>
        </div>
    </div>
);
}

function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}
