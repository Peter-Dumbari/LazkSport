import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import swal from "sweetalert";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-configuration";
import { signup, useAuth, logout, login } from "../firebase-configuration";
import { useHistory } from "react-router-dom";
import Loader from "../Loaders/Loader";
import Image from "../images/global.png";
import Footer from "./Footer";
import HandleModal from '../Components/HandleModal'
import { Link } from "react-router-dom";






export default function SubscriptionPage() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

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
    setIsLoading(false);

    await signup(emailRef.current.value, passwordRef.current.value)
      .then((res) => {
        console.log(res);
        if (res.statusText === "OK") {
          swal("Thanks for subscribing!", {
            buttons: false,
            timer: 3000,
          });
          if (res.operationType === "signIn") {
            history.push("/home");
          }
          setIsLoading(true);
        }
      })
      .catch((FirebaseError) => {
        alert(FirebaseError);
      });
  };

  return (
    <>
      <body className="bg-light">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-md-7">
              <img src={Image} alt="" width="100%" />
              <div style={{ color: "#fff" }}>
                <h3
                  style={{ fontFamily: "sans-serif" }}
                  className="openingNote"
                >
                  Welcome to LAZKSPORT Entertainment{" "}
                </h3>
              </div>
            </div>
            <div className="col-10 col-md-5 shadow-lg p-5 mb-5 bg-transparent rounded">
              <h4 className="header_Note">Create a user account to continue</h4>
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
                  {" "}
                  <button
                    disabled={isLoading || currentUser}
                    className="btn btn-danger"
                  >
                    Create account
                  </button>
                </center>
                {isLoading && <Loader />}
              </form>

              <div className="or_line">
                <hr className="line" />
                <p
                  className="hr_p"
                  style={{ color: "#000", fontFamily: "serif" }}
                >
                  OR
                </p>
                <hr className="line" />
              </div>
              
              {/* <button disabled={isLoading || !currentUser} className="btn btn-warning" onClick={HandleLogout}>Logout</button> */}
              {/* <button
                disabled={isLoading || currentUser}
                className="btn btn-secondary"
                onClick={HandleLogin}
              >
                Login
              </button> */}
              <HandleModal/>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
}


