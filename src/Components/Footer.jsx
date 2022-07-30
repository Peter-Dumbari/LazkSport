import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid text-center bg-secondary sticky-bottom" style={{margin: '0', width: '100%'}}>
      <div className="row" >
        <div className="col">
          <p className="fs-5">About us</p>
          <p className="fs-7">
            LazkSport is a website that was developed on the 25th of July, 2022
            by a young developer called Lazk
          </p>
        </div>
        <div className="col">
          <p className="fs-5">Contacts</p>
          <Link to="">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-twitter-square" style={{color: 'black', fontSize: '100%',marginRight: '10%'}}></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-google"></i>
          </Link>
          <Link to="">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
        </div>
        <div className="col">
          <button type="button" className="btn btn-outline-danger">
            Get Started
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <p className="fs-8">LazkSport © 2022 All Right Reserved </p>
        </div>
      </div>
    </div>
  );
}
