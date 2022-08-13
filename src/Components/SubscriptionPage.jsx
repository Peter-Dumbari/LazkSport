import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import swal from "sweetalert";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-configuration";
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

export default function SubscriptionPage() {
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
            setIsLoading(false);
          }
        }
      })
      .catch((FirebaseError) => {
        alert(FirebaseError);
        setIsLoading(false);
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
            <div className="col-12 col-md-5 shadow-lg p-5 mb-5 bg-transparent rounded" >
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
                    <Loader />
                  ) : (
                    <button className="btn btn-danger">Create account</button>
                  )}
                </center>
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
              <div className="row">
                <div className="col">
                  <div className="col d-flex justify-content-around shadow-sm p-3 mb-3 bg-body rounded" style={{cursor: 'pointer'}} onClick={HandleFacebook}>
                      <i className="fa-brands fa-facebook"/> <h6>SignUp using Facebook Account</h6>
                  </div>
                  <div class="col d-flex justify-content-around shadow-sm p-3 mb-3 bg-body rounded" style={{cursor: 'pointer'}} onClick={HandleGoogle}>
                      <i className="fa-brands fa-google"></i><h6>SignUp using Google Account</h6>
                  </div>
                </div>
              </div>
              <HandleModal />
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
}
