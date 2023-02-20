import React from 'react'
const Wishlist = () => {
  return (
    <>
    <div>
       <div className='container text-center'>
        <h1 className='fs-1 fw-bold mt-5 mb-3'>Wishlist</h1>
        <p className='mx-auto fs-5 mb-4' style={{ width: '55%' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae omnis quis obcaecati voluptate deserunt repellat distinctio illo atque fugit</p>
        <div className="btn border border-dark rounded-0 px-5 fs-6 mb-5">Shop all</div>
        <div className="row mb-5 mx-auto" style={{ width: '90%' }}>
          <div className="col-md-4 mt-5">
            <div className="card img rounded-0 border-0">
              <img src="/images/arrival1.jpg" className="card-img-top rounded-0" alt="..." />
              <div className="card-body">
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card img rounded-0 border-0">
              <img src="/images/arrival2.jpg" className="card-img-top rounded-0" alt="..." />
              <div className="card-body">
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5">
            <div className="card img rounded-0 border-0">
              <img src="/images/arrival3.jpg" className="card-img-top rounded-0" alt="..." />
              <div className="card-body">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  ) 
}
export default  Wishlist
