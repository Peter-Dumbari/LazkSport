import React from "react";
import Manu from "../images/Ronaldo image.jpg";
import Messi from "../images/messiboko.jpg";
import Chelsea from "../images/chelsea.jpg";
import Box from "./Card";
import Footer from "../Components/Footer";
import StyleBg from "./StyleBg";
import "../App.css";
import Carousel from 'react-bootstrap/Carousel';


export default function HomePage() {
  return (
  <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Manu}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>...For research and backup</h2>
          <h5>Is openned for all type of inquiry concerning Sports.</h5>
          <button type="button" className="btn btn-outline-danger btn-lg" >GET STARTED</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Messi}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>..Entertainment and Refreshment</h2>
          <h5>free livescores and other sport updates.</h5>
          <button type="button" className="btn btn-outline-danger btn-lg">GET STARTED</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Chelsea}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>...LazkSport for all, both young and aged</h2>
          <h5>
           Internet freedom is our goal.
          </h5>
          <button type="button" className="btn btn-outline-danger btn-lg">GET STARTED</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Box/>
    <Footer/>
    </>
  );
}
