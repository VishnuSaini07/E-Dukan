import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { HiShoppingCart } from 'react-icons/hi'

const Header = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container px-5">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">E-Dukan</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">Man</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">Woman</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">Kids</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>

            <div className="input-group me-4" style={{ width: '45%' }} >
              <input type="text" className="form-control" placeholder="Search Product" aria-label="Search Product" aria-describedby="basic-addon2" />
              <span className="input-group-text" id="basic-addon2">
                <BsSearch />
              </span>
            </div>
            <NavLink to="wishlist">
              <AiFillHeart className='fs-2 fw-light me-3' />
            </NavLink>
            <NavLink to="cart">
              <HiShoppingCart className='fs-2 fw-light me-4' />
            </NavLink>
            <NavLink to="/" className="btn btn-dark text-white btn-md me-5">Login</NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header