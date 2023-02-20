import React from 'react'
import { BsHeart } from 'react-icons/bs'
import { CiShare1 } from 'react-icons/ci'

const ProductDetail = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-6">
                        <div class="container text-center">
                            <div class="row row-cols-2 gap-3">
                                <div class="col" style={{ height: '250px', width: '250px', background: 'lightGrey' }}></div>
                                <div class="col" style={{ height: '250px', width: '250px', background: 'lightGrey' }}></div>
                                <div class="col" style={{ height: '250px', width: '250px', background: 'lightGrey' }}></div>
                                <div class="col" style={{ height: '250px', width: '250px', background: 'lightGrey' }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="productInfo d-flex justify-content-between">
                            <div className="name fs-1 fw-bold">Jeans</div>
                            <div className="action d-flex align-items-center justify-content-between">
                                <BsHeart className='fs-2'  />
                                <CiShare1 className='fs-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail