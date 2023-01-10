import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {login} from "../firebase-configuration"
import Loader from '../Loaders/Loader';
import { useNavigate } from "react-router-dom";


function HandleModal() {
      const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const [isLoading, setIsLoading]= useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const HandleLogin = async () => {
    setIsLoading(true)
    await login(emailRef.current.value, passwordRef.current.value)
      .then((res) => {
        if (res.operationType === "signIn") {
          navigate("/home");
          setIsLoading(false)
          console.log(res.operationType)
        }
      })
      .catch((FirebaseError) => {
        alert(FirebaseError);
        console.warn(FirebaseError)
        setIsLoading(false)
      });
  };


  return (
    <>
        <p onClick={handleShow} className="login">Already a User? Login</p>
      

      <Modal show={show} onHide={handleClose}
aria-labelledby="contained-modal-title-vcenter"centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign In your Credentials</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="row">
        <div class="col-md-8 offset-md-2">
            
        <form className="was-validated" onSubmit={HandleLogin}>
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
                    required
                    ref={passwordRef}
                    minLength="6"
                    maxLength="20"
                  />
                  <div className="invalid-feedback">
                    Your Password is required.
                  </div>
                </div>
                {isLoading ? <Loader/> : null}
              </form>     
        </div>
        </div>   
            </Modal.Body>
        <Modal.Footer>
        <p style={{color: 'red', textShadow: '2px 2px 5px #000'}}> Enter your credentials correctly</p>
          <Button variant="danger" onClick={HandleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HandleModal