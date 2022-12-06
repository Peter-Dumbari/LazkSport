import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import swal from "sweetalert";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-configuration";
import googlelogo from "../images/googlelogo.png";
import facebooklogo from "../images/facebooklogo.png";
import {
  signup,
  useAuth,
  SignInWithGoogle,
  signInWithFacebook,
} from "../firebase-configuration";
import { useHistory } from "react-router-dom";
import Loader from "../Loaders/Loader";
import Image from "../images/global.png";
import Footer from "./Footer";
import HandleModal from "../Components/HandleModal";
import { Link } from "react-router-dom";
import $ from "jquery";
import News from "../Pages/News/News";
import Aboutus from "../Pages/Aboutus/Aboutus";
import Counters from "../Pages/Counters/Counters";
import { Waypoint } from "react-waypoint";
import "animate.css";
import logo from "../images/newlogo.png";
import "../Components/OpeningNav/Openingnav.css";

export default function SubscriptionPage() {
  const customer_rep = collection(db, "Customer_Cares");
  const [customerRep, setCustomerRep] = useState([]);

  useEffect(() => {
    // setIsLoading(true)
    const customerCare = async () => {
      const customer_care = await getDocs(customer_rep);
      setCustomerRep(
        customer_care.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      // setIsLoading(false)
    };
    customerCare();
  }, []);

  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const HandleFacebook = () => {
    signInWithFacebook()
      .then((res) => {
        if (res.operationType === "signIn") {
          history.push("/home");
        }
        console.log(res);
        window.localStorage.setItem("Image", res.user.photoURL);
        window.localStorage.setItem("Name", res.user.displayName);
        window.location.reload(1);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const HandleGoogle = async () => {
    await SignInWithGoogle()
      .then((res) => {
        console.log(res);
        if (res.operationType === "signIn") {
          history.push("/home");
        }
        window.localStorage.setItem("Image", res.user.photoURL);
        window.localStorage.setItem("Name", res.user.displayName);
        window.location.reload(1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const usersCollectionRef = collection(db, "Users");

  // const HandleLogout = () =>{
  //   try{
  //     logout()
  //   }catch{
  //     alert('error oh')
  //   }
  useEffect(() => {
    window.addEventListener("offline", function (e) {
      swal("No internet, check connection and try again!");
    });
  });

  window.addEventListener("online", function (e) {
    console.log("online");
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const userCredential = await signup(
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((res) => {
        console.log(res);
        if (res.statusText === "OK") {
          swal("Thanks for subscribing!", {
            buttons: false,
            timer: 3000,
          });
        }
        if (res.operationType === "signIn") {
          history.push("/");
          setIsLoading(false);
        }
      })
      .catch((FirebaseError) => {
        alert(FirebaseError);
        setIsLoading(false);
      });

    await userCredential.user.sendEmailVerification({
      url: "http://localhost: 300",
    });
  };

  const [classname, setClassname] = useState(
    document.getElementsByClassName("js-wp-1")
  );
  const [classnam, setClassnam] = useState(
    document.getElementsByClassName("js-wp-2")
  );
  


  


  
  return (
    <>
      <nav className="navbar navbar-expand-lg opening-nav sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            <img src={logo} width="150px" />
          </a>
          <button
            className="navbar-toggler" 
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#news">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#customer_care">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about_us">
                  About Us
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 search-box"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
      <body className="bg-light signup-body">
        <div className="container ">
          <div className="row signing">
            <div className="col-12 col-md-7">
              <img src={Image} alt="" width="100%" />
              <div style={{ color: "#fff" }}>
                <div>
                  <div
                    id="carouselExampleControls"
                    class="carousel slide subscription_carousel"
                    data-bs-ride="carousel">
                    <div class="carousel-inner ">
                      <h5 className="lead carousel_header">Our Offers:</h5>
                      <div class="carousel-item active">
                        <h3>Web Development</h3>
                        <button className="btn btn-warning button-large">
                          Get Started
                        </button>
                      </div>
                      <div class="carousel-item">
                        <h3>Online Marketing</h3>
                        <button className="btn btn-warning button-large">
                          Learn more
                        </button>
                      </div>
                      <div class="carousel-item">
                        <h3>Football Updates</h3>
                        <button className="btn btn-warning button-large">
                          Get Updates
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 shadow-lg p-5 mb-5 bg-transparent rounded">
              <h5 className="header_Note">Create a user account to continue</h5>
              <form className="was-validated" onSubmit={HandleSubmit}>
                <div className="mb-3 align-text-Center">
                  <input
                    type="email"
                    className="form-control"
                    id="validationTextarea"
                    placeholder="Enter Your Email"
                    ref={emailRef}
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your Email correctly.
                  </div>
                  <br />
                  <input
                    type="password"
                    className="form-control"
                    id="validationTextarea"
                    placeholder="Enter Your Password"
                    ref={passwordRef}
                    required
                    minLength="6"
                    maxLength="20"
                  />
                  <div className="invalid-feedback">
                    Your Password is required.
                  </div>
                </div>

                <br />
                <center>
                  {isLoading ? (
                    <button class="btn btn-danger" type="button" disabled>
                      <span
                        className="spinner-border spinner-border-sm mx-2"
                        role="status"
                        aria-hidden="true"></span>
                      Creating Account
                    </button>
                  ) : (
                    <button className="btn btn-danger">Create Account</button>
                  )}
                </center>
              </form>

              <div className="or_line">
                <hr className="line" />
                <p
                  className="hr_p"
                  style={{ color: "#000", fontFamily: "serif" }}>
                  OR
                </p>
                <hr className="line" />
              </div>
              <div className="row">
                <div
                  className="col d-flex media-signing-box facebook mx-2"
                  onClick={HandleFacebook}>
                  <img
                    src={facebooklogo}
                    width="20px"
                    height="20px"
                    className="media-icon"
                  />
                  <span>Facebook Account</span>
                </div>
                <div
                  class="col d-flex media-signing-box google"
                  onClick={HandleGoogle}>
                  <img
                    src={googlelogo}
                    width="20px"
                    height="20px"
                    className="media-icon"
                  />
                  <span>Google Account</span>
                </div>
              </div>
              <HandleModal />
            </div>
          </div>
        </div>
        <section>
          <div className="middle_advertisement">
            <div className="container-fluid">
              <div className="row">
                <Waypoint
                  onEnter={() =>
                    setClassname("animate__animated animate__fadeInUp")
                  }
                  onLeave={() => setClassname("invisible")}
                  topOffset="-30%"
                  bottomOffset="30px"
                />
                <Waypoint
                  onEnter={() =>
                    setClassnam("animate__animated animate__fadeInDownBig")
                  }
                  onLeave={() => setClassnam("invisible")}
                  topOffset="-30%"
                  bottomOffset="30px"
                />

                <div
                  className={`col-md-6 advert_image_container js-wp-1 ${classname}`}>
                  <img
                    className="advert_image"
                    src="https://www.formula1.com/content/dam/fom-website/subscribe-to-f1/stf1-banner-1.png"
                    alt=""
                  />
                </div>
                <div className={`col-md-6 advert_heading js-wp-2 ${classnam}`}>
                  <h2>Stream f1 live on the goal</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* COUNTERS SECTION */}
        <section>
          <Counters />
        </section>
        {/* NEWS CONTAINER SECTION  */}
        <section id="news">
          <News />
        </section>
        <section id="customer_care">
          <div className="container customer_Care_container">
            <center>
              <h3>
                Customer <span className="shared_color">Care</span>{" "}
                Representatives
              </h3>
            </center>
            <hr />
            <div className="row">
              <Waypoint
                onEnter={() =>
                  setClassname("animate__animated animate__fadeInUp")
                }
                onLeave={() => setClassname("invisible")}
                topOffset="-30%"
                bottomOffset="30px"
              />
              {customerRep.map((CustomerCareRep) => (
                <div
                  className={`col-md-4 js-wp-1 ${classname}`}
                  key={CustomerCareRep.id}>
                  <div className="row">
                    <div className="col-3 testimonies-card">
                      <img
                        src={CustomerCareRep.profile_picture}
                        alt=""
                        className="company-organizer-img"
                      />
                    </div>
                    <div className="col-9">
                      <blockquote>
                        <h4 className="organizer_name">
                          {CustomerCareRep.customer_representative}
                        </h4>
                        <h6>{CustomerCareRep.position}</h6>
                        <h6>{CustomerCareRep.office_address}</h6>
                        <h6>{CustomerCareRep.phone_number}</h6>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
          <section id="about_us">
          <Aboutus />
          </section>
        <Footer />
      </body>
    </>
  );
}
