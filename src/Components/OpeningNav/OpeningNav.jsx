import React from "react";
import logo from "../../images/newlogo.png";
import "../OpeningNav/Openingnav.css";


export default function OpeningNav() {

  return (
    <nav className="navbar navbar-expand-lg opening-nav sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
          <img src={logo} width="150px" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <i className={true? 'fa fa-bars': 'fa fa-times'}></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
             <a className="nav-link active" aria-current="page" href='#'>News</a>
           </li>
             <li className="nav-item">
             <a className="nav-link" aria-current="page" href='#'>Help</a>
           </li>
             <li className="nav-item">
             <a className="nav-link" aria-current="page" href='#'>About Us</a>
           </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2 search-box" type="search" placeholder="Search..." aria-label="Search"/>
        </form>
      </div>
    </div>
  </nav>
  );
}

