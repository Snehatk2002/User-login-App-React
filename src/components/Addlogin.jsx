import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Addlogin = () => {
    const [data,setData]=useState(
        {
           "username":" ",
           "password":" "

        }
    )
    const inputHandler=(event)=>{
      setData({ ...data,[event.target.name]: event.target.value})
    }
    const readValue=()=>{
        console.log(data)

    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">USER NAME</label>
                            <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PASSWORD</label>
                           <input type="password" name="password" id="" className="form-control" value={data.password} onChange={inputHandler} />
                        </div>
                        <center>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button class="btn btn-success" onClick={readValue}>LOGIN</button>
                        </div>
                        <Link class="nav-link" to="/signup">New user click here</Link>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addlogin