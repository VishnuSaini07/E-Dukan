import React from 'react'

const Shop = () => {
    return (
        <>
            <div className="container mt-5 px-5" style={{ height: '100%' }}>
                <h1>Shop</h1>
                <p style={{ width: '40%' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut suscipit dolorem, consequuntur deserunt laudantium quam repellendus voluptatum quo atque commodi nulla sunt.</p>
                <div className="row row-2">
                    <div className="col-3">
                        <div className="filter py-5">
                            <p className='fs-4'>Filters <a href="/" className='text-secondary px-4 fs-6 text-decoration-underline'>Clear filters</a></p>
                            <h6 className='mb-3'>Categories</h6>
                            <div class="form-check">
                                <input class="form-check-input border-dark" type="checkbox" value="" id="Jeans" />
                                <label class="form-check-label" for="Jeans">
                                    Jeans
                                </label><br />
                                <input class="form-check-input border-dark" type="checkbox" value="" id="Shirts" />
                                <label class="form-check-label" for="Shirts">
                                    Shirts
                                </label><br />
                                <input class="form-check-input border-dark" type="checkbox" value="" id="Jackets" />
                                <label class="form-check-label" for="Jackets">
                                    Jackets
                                </label><br />
                                <input class="form-check-input border-dark" type="checkbox" value="" id="T-Shirts" />
                                <label class="form-check-label" for="T-Shirts">
                                    T-Shirts
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 py-5">
                        <div className="sortProduct d-flex flex-column">
                            <div className='d-flex align-items-center border border-dark rounded ms-auto' style={{ padding: '0 10px' }}>
                                <span className='text-secondary'>Sort by</span>
                                <div class="dropdown">
                                    <button class="btn text-dark dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Popular
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="/">Popular</a></li>
                                        <li><a class="dropdown-item" href="/">Newest</a></li>
                                        <li><a class="dropdown-item" href="/">Oldest</a></li>
                                    </ul>
                                </div>
                            </div>
                            <span className='mt-2 ms-auto'>Showing 1003 Products</span>
                        </div>
                        <div className="productList">
                            <div className="container mt-4">
                                <div className="row mb-4 mx-auto">
                                    <div className="col-md-4">
                                        <div className="card img rounded-0 border-0">
                                            <img src="/images/category1.jpg" className="card-img-top rounded-0" alt="..." />
                                            <div className="card-body px-0">
                                                <span className="card-text text-start fw-bold fs-4">Shoes</span>
                                                <p className="card-text text-start fw-normal fs-5 pt-0">Rs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card img rounded-0 border-0">
                                            <img src="/images/category2.jpg" className="card-img-top rounded-0" alt="..." />
                                            <div className="card-body px-0">
                                                <span className="card-text text-start fw-bold fs-4">Jeans</span>
                                                <p className="card-text text-start fw-normal fs-5 pt-0">Rs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card img rounded-0 border-0">
                                            <img src="/images/category3.jpg" className="card-img-top rounded-0" alt="..." />
                                            <div className="card-body px-0">
                                                <span className="card-text text-start fw-bold fs-4">Shirts</span>
                                                <p className="card-text text-start fw-normal fs-5 pt-0">Rs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card img rounded-0 border-0">
                                            <img src="/images/category1.jpg" className="card-img-top rounded-0" alt="..." />
                                            <div className="card-body px-0">
                                                <span className="card-text text-start fw-bold fs-4">Shoes</span>
                                                <p className="card-text text-start fw-normal fs-5 pt-0">Rs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card img rounded-0 border-0">
                                            <img src="/images/category2.jpg" className="card-img-top rounded-0" alt="..." />
                                            <div className="card-body px-0">
                                                <span className="card-text text-start fw-bold fs-4">Jeans</span>
                                                <p className="card-text text-start fw-normal fs-5 pt-0">Rs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card img rounded-0 border-0">
                                            <img src="/images/category3.jpg" className="card-img-top rounded-0" alt="..." />
                                            <div className="card-body px-0">
                                                <span className="card-text text-start fw-bold fs-4">Shirts</span>
                                                <p className="card-text text-start fw-normal fs-5 pt-0">Rs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card img rounded-0 border-0">
                                            <img src="/images/category1.jpg" className="card-img-top rounded-0" alt="..." />
                                            <div className="card-body px-0">
                                                <span className="card-text text-start fw-bold fs-4">Shoes</span>
                                                <p className="card-text text-start fw-normal fs-5 pt-0">Rs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card img rounded-0 border-0">
                                            <img src="/images/category2.jpg" className="card-img-top rounded-0" alt="..." />
                                            <div className="card-body px-0">
                                                <span className="card-text text-start fw-bold fs-4">Jeans</span>
                                                <p className="card-text text-start fw-normal fs-5 pt-0">Rs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card img rounded-0 border-0">
                                            <img src="/images/category3.jpg" className="card-img-top rounded-0" alt="..." />
                                            <div className="card-body px-0">
                                                <span className="card-text text-start fw-bold fs-4">Shirts</span>
                                                <p className="card-text text-start fw-normal fs-5 pt-0">Rs.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="loadproduct">
                                    <div className='d-flex justify-content-center'>
                                        <button className="btn border border-dark rounded-0 px-5 fs-5 mt-4 mb-5">Load more products</button>
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

export default Shop