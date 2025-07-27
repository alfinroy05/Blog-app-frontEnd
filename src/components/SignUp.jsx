import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [input,setInput]=new useState(
        {
            "name": "",
            "phone": "",
            "email": "",
            "password": "","cnfpass":""
        }

    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})

    }
    const readValues=()=>{
        if (input.password === input.cnfpass) {
            // Here you can add the logic to handle the registration, like sending the data to an API
            
           
            let newInput={
            "name": input.name,
            "phone": input.phone,
            "email": input.email,
            "password": input.password,}
            
            axios.post("http://localhost:3030/signup",newInput).then((response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Registration successful");
                    setInput({
                        "name": "",
                        "phone": "",
                        "email": "",
                        "password": "",
                        "cnfpass": ""
                    })
                   
                } else {
                    alert("email id already exists");
                    setInput({
                        "name": "",
                        "phone": "",
                        "email": "",
                        "password": "",
                        "cnfpass": ""
                    })
                }

            }).catch((error)=>{
                console.error("There was an error registering  :)", error);
            })

            
        } else {
            alert("Passwords do not match");
        }

    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Phone No</label>
                                <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" name='cnfpass' value={input.cnfpass} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValues} className="btn btn-success">Register</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <a href="" className="btn btn-primary">Back to Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp