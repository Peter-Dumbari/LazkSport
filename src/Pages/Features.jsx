import React from "react";
import Footer from "../Components/Footer";
import undraw from "../images/undrawimage.svg";

export default function Features() {
  return (
    <>
      <body>
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-md-6">
              <h4 style={{color: '#6C63FF'}}>Features</h4>
              <p style={{ color: "#000" }}>
                This Website was created by Peter Dumbari, during his Learning
                Erra, so the process toke me sometimes to develop it.
              </p>
              <p style={{ color: "#000" }}>
                The is a Sport site for sport updates and other sport story, we
                also have other educative items on the site so adult and kits
                can use it
              </p>
            </div>
            <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
              <img
                src={undraw}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
}
