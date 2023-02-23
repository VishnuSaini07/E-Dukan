import React from 'react'

const Cart = () => {
    return (
        <>
            <div className="container my-5 px-5" style={{height :'135vh'}}>
                <h1>Your Cart</h1>
                <div className="row">
                    <div className="col-6">
                        <p>Not ready to checkout? Continue shopping</p>
                        <div className="col-12">
                            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                                        <img src="./images/category1.jpg" className="img-fluid rounded-start" alt="..." style={{ height: '100%' }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body mt-2 d-flex flex-column" >
                                            <h4 className="card-title">Shoes</h4>
                                            <span>Size: L</span>
                                            <div className="quantVendor d-flex justify-content-between">
                                                <span>Quantity: 1</span>
                                                <span>By vendor name</span>
                                            </div>
                                            <div className="priceRemove pt-2 d-flex justify-content-between">
                                                <h4>Rs.</h4>
                                                <a href="/" className='pt-3 text-secondary fs-6 text-decoration-underline'>Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr style={{ width: '90%' }} />
                        <div className="col-12">
                            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                                <div className="row g-0">
                                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                                        <img src="./images/category1.jpg" className="img-fluid rounded-start" alt="..." style={{ height: '100%' }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body mt-2 d-flex flex-column" >
                                            <h4 className="card-title">Shoes</h4>
                                            <span>Size: L</span>
                                            <div className="quantVendor d-flex justify-content-between">
                                                <span>Quantity: 1</span>
                                                <span>By vendor name</span>
                                            </div>
                                            <div className="priceRemove pt-2 d-flex justify-content-between">
                                                <h4>Rs.</h4>
                                                <a href="/" className='pt-3 text-secondary fs-6 text-decoration-underline'>Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6" style={{ width: '40%' }}>
                        <h4>Order summary</h4>
                        <input className='py-2 ps-3 my-3 w-100' type="text" placeholder='Enter coupon code here' />
                        <div className="orderDetail mb-2 d-flex justify-content-between">
                            <span>Subtotal</span>
                            <span>Rs.</span>
                        </div>
                        <div className="shipping charges d-flex justify-content-between">
                            <span>Shipping</span>
                            <span>Calculated at the next step</span>
                        </div>
                        <hr style={{ width: '100%' }} />
                        <div className="total charges d-flex justify-content-between">
                            <span>Total</span>
                            <span>Rs.</span>
                        </div>
                        <button className='btn btn-dark mt-5 w-100' style={{ padding: '15px 150px' }}>Continue to checkout</button>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-6">
                        <h4>Order information</h4>
                        <hr style={{ border: '1px solid black', opacity: '0.9', width: '90%' }} />

                        <div className="accordion border-0" id="accordionPanelsStayOpenExample" style={{ width: '90%' }}  >
                            <div className="accordion-item border-0 border-bottom">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button text-dark bg-white border-0 outline-0" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Return Policy
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 border-bottom">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button className="accordion-button text-dark bg-white border-0 outline-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        Shipping options
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 border-bottom">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button text-dark bg-white border-0 outline-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        Shipping options
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart