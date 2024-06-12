import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const AddSignup = () => {
    const [data,setData]=useState(
        {
            "name" : " ",
           "dob":" ",
           "bloodgroup":"",
           "mobile":"",
           "address":" ",
           "pincode":"",
           "district":"",
           "place":"",
           "email":"",
           "username":"",
           "password":"",
           "confirm":""
            
        }
    )
    const inputHandler=(event)=>{
      setData({ ...data,[event.target.name]: event.target.value})
    }
    const readValue=()=>{
        if (data.password == data.confirm)
        {
            alert("password and confirm password are same")
        }else{
            alert("password and confirm password are not same")
        }
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success")
                 {
                    alert("SUCCESSFULLY ADDED")
                } else {
                    alert("ERROR")
                }
            }
        ).catch()
        
    }
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">NAME</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DOB</label>
                                <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">BLOOD GROUP</label>
                               <select name="bloodgroup" id="" className="form-control" value={data.bloodgroup} onChange={inputHandler}>
                                <option value="A=">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                               </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">MOBILE NO</label>
                                <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">ADDRESS</label>
                                <textarea name="address" id="" cols="30" rows="10" className="form-control" value={data.address} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PINCODE</label>
                                <input type="text" className="form-control" name='pincode' value={data.pincode} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">DISTRICT</label>
                                <select name="district" id="" className="form-control" value={data.district} onChange={inputHandler}>
                                    <option value="KASARAGOD">KASARAGOD</option>
                                    <option value="KANNUR">KANNUR</option>
                                    <option value="THRISSUR">THRISSUR</option>
                                    <option value="PALAKKAD">PALAKKAD</option>
                                    <option value="MALAPPURAM">MALAPPURAM</option>
                                    <option value="PATHANAMTHITTA">PATHANAMTHITTA</option>
                                    <option value="KOLLAM">KOLLAM</option>
                                    <option value="WAYANAD">WAYANAD</option>
                                    <option value="ALAPPUZHA">ALAPPUZHA</option>
                                    <option value="TVM">TVM</option>
                                    <option value="KOTTAYAM">KOTTAYAM</option>
                                    <option value="ERNAKULAM">ERNAKULAM</option>
                                    <option value="ERNAKULAM">IDUKKI</option>
                                    <option value="KOZHIKODE">KOZHIKODE</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PLACE</label>
                                <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">EMAIL ID</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">USER NAME</label>
                                <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">PASSWORD</label>
                               <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">CONFIRM PASSWORD</label>
                                <input type="password" name="confirm" id="" className="form-control" value={data.confirm} onChange={inputHandler}/>
                            </div>
                            <center>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                               <button class="btn btn-info" onClick={readValue}>REGISTER</button>
                            </div>
                            <Link class="nav-link" to="/">Back To Login</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default AddSignup