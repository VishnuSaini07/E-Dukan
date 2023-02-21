          import React from 'react'

          const Contact = () => {
            return (
        <div className ="contianer" style={{width: '40%'}} >
                    <h1 className = "my-3"> <center>Contact US</center></h1>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
                </div>
          <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
              <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Mobile"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Your concern</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
            )
          }

          export default Contact