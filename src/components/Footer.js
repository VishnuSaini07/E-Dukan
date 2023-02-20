import React from 'react'

const Footer = () => {
  return (
    <div className='container mt-5'>
      <hr style={{ border: '1px solid black', opacity: '0.9' }} />
      <div className="row mb-5 pt-4 px-5">
        <div className="col-md-4">
          <h2>Sign up for our newsletter</h2>
          <p style={{ fontSize: '14px' }}>Be the first to know about our special offers, news, and updates.</p>
          <div className="email">
            <input className='py-2 ps-3' type="text" placeholder='Email Address' style={{ width: '100%' }} />
            <a className='signup' href="/">Sign Up</a>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row px-5">
            <div className="col-md-4">
              <h4 className='mb-3'>Get to know us</h4>
              <p>About Us</p>
              <p>Careers</p>
              <p> Site Map</p>
            </div>
            <div className="col-md-4">
              <h4 className='mb-3'>Customer Policies</h4>
              <p>Contact Us</p>
              <p>Payments</p>
              <p>Cancellation & Returns</p>
            </div>
            <div className="col-md-4">
              <h4 className='mb-3'>Connect with us</h4>
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright text-center fs-5" style={{ background: 'black', color: 'white' }}>
        <p className='text-uppercase'>copyrights all right reserved</p>
      </div>
    </div>
  )
}

export default Footer