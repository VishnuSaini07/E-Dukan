import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft, BsFacebook } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
        <div className=" position-absolute top-0 start-0 ">
          <Link to="/" className='backBtn d-flex align-items-center justify-content-center flex-row'>
            < BsArrowLeft className='back' />
          </Link>
        </div>
        <div className="card my-5 border-0 shadow rounded-3 p-5" style={{ background: '#F8F8F8' }}>
          <h5 className="card-title text-center mb-5 fs-1">Log in</h5>

          <form className='px-5'>
            <div className="mb-2">
              <button type="text" className="btn btn-light bg-white mb-3 shadow-sm d-flex justify-content-around border-0 align-items-center" style={{ width: '270px' }}><FcGoogle className='fs-4' /> Log in with google</button>
            </div>

            <div className="mb-2">
              <button type="submit" className="btn w-100 btn-primary border-0 d-flex justify-content-around align-items-center"><BsFacebook className='fs-5' /> Log in with facebook</button>
            </div>

            <div className="form-group mx-auto d-flex align-items-center my-3">
              <div className="border-bottom w-100 ml-5"></div>
              <span className="px-2 small text-muted font-weight-bold text-muted">OR</span>
              <div className="border-bottom w-100 mr-5"></div>
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" autoComplete='' />
            </div>
            <button type="submit" className="btn w-100 btn-primary">Log in</button>
            <div className=' text-center mt-2'>
              <span className='newOne'>
                Create an account? <Link className="newOne text-primary" to="signup" > Sign up</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login