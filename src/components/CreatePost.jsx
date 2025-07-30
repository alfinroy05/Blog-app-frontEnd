import axios from 'axios'
import React, { useState } from 'react'

const CreatePost = () => {
  const token= sessionStorage.getItem("token");
  const [input, setInput] = useState({
    "message": "",
    "userId": sessionStorage.getItem("userId")

  })
  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value })
  }
  const readValues = () => {
    console.log(input);
    console.log(token)
    axios.post("http://localhost:3030/create", input, {
      headers: {
        "token":token,
        "Content-Type": "application/json"
      }
    }).then((response) => {
      console.log(response);
      if (response.data.status === "success") {
        alert("Post created successfully");
       
      } else {
        alert("Failed to create post");
      }
    }).catch()
  }
  return(
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Post a Message</label>
                <textarea name="message" value={input.message} onChange={inputHandler} className="form-control"></textarea>
              </div>
              <div className="col col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readValues} className="btn btn-success">post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default CreatePost