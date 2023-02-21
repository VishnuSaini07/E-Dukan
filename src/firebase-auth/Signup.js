import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft, BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

const Signup = () => {
    return (
        <>
            <div className="container ">
                <div className=" position-absolute top-0 start-0 ">
                    <Link to="/" className='backBtn d-flex align-items-center justify-content-center flex-row'>
                        < BsArrowLeft className='back' />
                    </Link>
                </div>
                <div className="card my-5 mx-auto border-0 shadow rounded-3 p-4" style={{ background: '#F8F8F8', width: '40%' }}>
                    <h5 className="card-title text-center mb-5 fs-1">Sign Up</h5>

                    <form className="row g-3">
                        <div className="d-flex align-items-center justify-content-center flex-column">

                            <div className="mb-3">
                                <button type="text" className="btn btn-light bg-white shadow-sm d-flex justify-content-around border-0 align-items-center" style={{ width: '270px' }}><FcGoogle className='fs-4' /> Sign up with google</button>
                            </div>

                            <div className="mb-2">
                                <button type="submit" className="btn btn-primary border-0 d-flex justify-content-around align-items-center" style={{ width: '270px' }}><BsFacebook className='fs-5' /> Sign up with facebook</button>
                            </div>
                        </div>

                        <div className="form-group mx-auto d-flex align-items-center mt-2">
                            <div className="border-bottom w-100 ml-5"></div>
                            <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
                            <div className="border-bottom w-100 mr-5"></div>
                        </div>
                        <div className="col-md-6">
                            <label for="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" />
                        </div>
                        <div className="col-md-6">
                            <label for="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id='lastName' />
                        </div>
                        <div className="col-md-12">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputPassword4" className="form-label">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-md-6 mb-2">
                            <label for="inputPassword4" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn w-100 btn-primary">Sign Up</button>
                        </div>
                        <div className=' text-center mt-2'>
                            <span className='newOne'>
                                Have an account? <Link className="newOne text-primary" to="login" > Sign In</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup