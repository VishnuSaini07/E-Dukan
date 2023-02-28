import React from 'react'
import { BsHeart } from 'react-icons/bs'
import { CiShare1 } from 'react-icons/ci'

const ProductDetail = () => {
    return (
        <>
            <div className="container my-5" style={{height: '100vh'}}>
                <div className="row">
                    <div className="col-6">
                        <div className="container text-center">
                            <div className="row row-cols-2 gap-2">
                                <div className="col border" style={{ height: '250px', width: '250px'}}>
                                    <img src="./images/men/jeans/jeans0101.jpg" style={{ height: '100%', width: '100%'}} alt="" />
                                </div>
                                <div className="col border" style={{ height: '250px', width: '250px'}}>
                                    <img src="./images/men/jeans/jeans0102.jpg" style={{ height: '100%', width: '100%'}} alt="" />
                                </div>
                                <div className="col border" style={{ height: '250px', width: '250px'}}>
                                    <img src="./images/men/jeans/jeans0103.jpg" style={{ height: '100%', width: '100%'}} alt="" />
                                </div>
                                <div className="col border" style={{ height: '250px', width: '250px'}}>
                                    <img src="./images/men/jeans/jeans0104.jpg" style={{ height: '100%', width: '100%'}} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="productInfo d-flex justify-content-between">
                            <div className="name">
                                <span className="fs-1 fw-bold pb-0">Jeans</span>
                                <p className='fs-4 py-0'>Rs.</p>
                            </div>
                            <div className="action d-flex mt-3 me-5">
                                <BsHeart className='fs-2 me-3' />
                                <CiShare1 className='fs-2' />
                            </div>
                        </div>
                        <div className="productDesc mt-4 fs-6">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, adipisci odit. Deleniti in commodi pariatur odit. Id consequatur quia optio fugiat veniam deleniti unde eveniet. In, illum. Nesciunt, totam corrupti?</p>
                            <p className='vendor fs-6'>By vendor name</p>
                        </div>
                        <div className="productSize">
                            <p className='fs-5 text-secondary'>Size</p>
                            <div className="sizes d-flex">
                                <button className="btn rounded-0 small d-flex align-items-center justify-content-center fs-5 fw-bold" style={{width: '50px', height: '50px', border: '2px solid black'}}>S</button>
                                <button className="btn rounded-0 medium d-flex align-items-center justify-content-center fs-5 fw-bold mx-2" style={{width: '50px', height: '50px', border: '2px solid black'}}>M</button>
                                <button className="btn rounded-0 large d-flex align-items-center justify-content-center fs-5 fw-bold" style={{width: '50px', height: '50px', border: '2px solid black'}}>L</button>
                            </div>
                        </div>
                        <div className="cartQuantity d-flex align-items-center">
                            <div className="cart">
                                <button className='btn btn-dark mt-4 mb-2' style={{padding: '15px 150px'}}>Add to Cart - Rs.</button>
                                <p className='text-secondary'>Free standard shipping <a href="/" className='text-secondary px-4 fs-6 text-decoration-underline'>Free Returns</a></p>
                            </div>
                            <div className="quantity d-flex flex-column ms-3" style={{marginBottom: '55px'}}>
                            <span className='fs-5 text-secondary mb-1'>Quantity</span>
                                <div className='d-flex align-items-center justify-content-center border border-dark rounded' style={{width: '110px', height: '55px', padding: '0 7px'}}>
                                    <button className='btn border-0 fs-4 text-secondary'>-</button>
                                    <span className='border-0 fs-5 px-2'>1</span>
                                    <button className='btn border-0 fs-4 text-secondary'>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail