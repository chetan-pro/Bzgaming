import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex align-items-baseline">
        <Link className="navbar-brand" to="/">B<span style={{color:"red"}}>Z</span> gaming</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mr-auto">
            <li className="nav-item active">
              <Link className="nav-Link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/features">Tournament</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-Link" to="/about">About</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button className="nav_btn btn  my-2 my-sm-0" type="submit"><Link className="nav-Link" to="/register">Register</Link></button>
            <button className="nav_btn btn  my-2 ml-3 my-sm-0" type="submit"><Link className="nav-Link" to="/login">Log in</Link></button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Navbar; 

